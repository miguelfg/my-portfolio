#!/usr/bin/env python3
"""Create explicit English/Spanish AI News variants via a translation provider.

The source language is recorded in front matter. English uses the canonical
filename; Spanish uses ``.es.md``. The script never overwrites an existing
translation unless ``--force`` is supplied.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
NEWS_DIR = ROOT / "portfolio" / "ai-news"
DATE_RE = re.compile(r"ai-news-summary-(\d{4}-\d{2}-\d{2})(?:\.es)?\.md$")
LANG_RE = re.compile(r"^\.\. lang:\s*(en|es)\s*$", re.MULTILINE | re.IGNORECASE)
SPANISH_MARKERS = (
    " el ", " la ", " los ", " las ", " una ", " que ", " para ", " y ",
    " hoy ", " compañía", " publicó", " presentó", " noticias", " resumen",
)


def body_and_metadata(text: str) -> tuple[str, str]:
    """Return the metadata block and body, preserving Markdown exactly."""
    match = re.search(r"\n\s*(?:<!--\s*)?(?:#\s+)?", text)
    if not match:
        return "", text
    # AI News files use reST metadata at the top, optionally inside an HTML comment.
    lines = text.splitlines(keepends=True)
    end = 0
    in_comment = False
    for index, line in enumerate(lines):
        stripped = line.strip()
        if index == 0 and stripped.startswith("<!--"):
            in_comment = True
        if in_comment:
            if "-->" in line:
                end = index + 1
                break
        elif stripped.startswith(".. ") or stripped == "":
            end = index + 1
        else:
            break
    return "".join(lines[:end]), "".join(lines[end:])


def detect_language(text: str) -> str:
    match = LANG_RE.search(text)
    if match:
        return match.group(1).lower()
    sample = " " + text.lower() + " "
    score = sum(sample.count(marker) for marker in SPANISH_MARKERS)
    return "es" if score >= 4 else "en"


def add_language_metadata(path: Path, language: str) -> None:
    text = path.read_text(encoding="utf-8")
    if LANG_RE.search(text):
        return
    marker = f".. lang: {language}\n"
    if text.startswith("<!--"):
        close = text.find("-->")
        if close >= 0:
            text = text[:close] + marker + text[close:]
        else:
            raise ValueError(f"Unclosed metadata comment: {path}")
    else:
        lines = text.splitlines(keepends=True)
        insert_at = 0
        while insert_at < len(lines) and (lines[insert_at].startswith(".. ") or not lines[insert_at].strip()):
            insert_at += 1
        lines.insert(insert_at, marker)
        text = "".join(lines)
    path.write_text(text, encoding="utf-8")


def deepl_translate(body: str, source: str, target: str) -> str:
    key = os.environ.get("DEEPL_AUTH_KEY")
    if not key:
        raise RuntimeError("DEEPL_AUTH_KEY is required; no translation was written")
    endpoint = os.environ.get("DEEPL_API_URL", "https://api-free.deepl.com")
    # Keep URLs and inline code stable while the provider translates prose.
    protected: list[str] = []

    def protect(match: re.Match[str]) -> str:
        protected.append(match.group(0))
        return f"ZXQPROTECTED{len(protected) - 1}ZXQ"

    payload_text = re.sub(r"https?://[^)\s]+|`[^`]+`", protect, body)
    payload = json.dumps({
        "text": [payload_text],
        "source_lang": source.upper(),
        "target_lang": target.upper(),
        "preserve_formatting": True,
    }).encode()
    request = Request(
        f"{endpoint.rstrip('/')}/v2/translate",
        data=payload,
        headers={
            "Authorization": f"DeepL-Auth-Key {key}",
            "Content-Type": "application/json",
            "User-Agent": "my-portfolio-ai-news/1.0",
        },
        method="POST",
    )
    try:
        with urlopen(request, timeout=60) as response:
            result = json.load(response)
    except (HTTPError, URLError) as exc:
        raise RuntimeError(f"DeepL request failed: {exc}") from exc
    translated = result["translations"][0]["text"]
    for index, original in enumerate(protected):
        translated = translated.replace(f"ZXQPROTECTED{index}ZXQ", original)
    return translated


def translated_path(source: Path, source_lang: str, target_lang: str) -> Path:
    stem = source.name.removesuffix(".es.md").removesuffix(".md")
    if target_lang == "en":
        return NEWS_DIR / f"{stem}.md"
    return NEWS_DIR / f"{stem}.{target_lang}.md"


def translate_file(source: Path, target: str, force: bool = False) -> Path:
    source_lang = detect_language(source.read_text(encoding="utf-8"))
    if source_lang == target:
        raise ValueError(f"{source.name} is already marked as {target}")
    # Legacy entries were stored without a language suffix even when written in
    # Spanish. Move those into Nikola's explicit `.es.md` convention first so
    # the English variant can safely use the canonical filename.
    if source_lang == "es" and not source.name.endswith(".es.md"):
        normalized = source.with_name(source.name.removesuffix(".md") + ".es.md")
        if normalized.exists():
            raise FileExistsError(f"Refusing to replace existing {normalized.name}")
        source.rename(normalized)
        source = normalized
        add_language_metadata(source, "es")
    destination = translated_path(source, source_lang, target)
    if destination.exists() and not force:
        raise FileExistsError(f"Refusing to overwrite {destination.name}; use --force")
    metadata, body = body_and_metadata(source.read_text(encoding="utf-8"))
    translated_body = deepl_translate(body, source_lang, target)
    translated_metadata = re.sub(r"^\.\. title:.*$", lambda m: m.group(0), metadata, flags=re.MULTILINE)
    translated_metadata = re.sub(r"^\.\. lang:.*$", f".. lang: {target}", translated_metadata, flags=re.MULTILINE)
    if not LANG_RE.search(translated_metadata):
        translated_metadata += f".. lang: {target}\n"
    destination.write_text(translated_metadata + translated_body, encoding="utf-8")
    return destination


def source_files() -> list[Path]:
    return sorted(NEWS_DIR.glob("ai-news-summary-*.md"), key=lambda p: p.name)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--date", help="Translate one YYYY-MM-DD entry")
    parser.add_argument("--target", choices=("en", "es"), required=True)
    parser.add_argument("--all", action="store_true", help="Process every canonical entry")
    parser.add_argument("--annotate", action="store_true", help="Only add detected lang metadata")
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()
    files = source_files()
    if args.date:
        files = [p for p in files if args.date in p.name]
    if not args.all and not args.date:
        parser.error("use --date YYYY-MM-DD or --all")
    if args.annotate:
        for path in files:
            if ".es.md" not in path.name:
                language = detect_language(path.read_text(encoding="utf-8"))
                add_language_metadata(path, language)
                print(f"annotated {path.name}: {language}")
        return 0
    for path in files:
        if ".es.md" in path.name:
            continue
        source_language = detect_language(path.read_text(encoding="utf-8"))
        if source_language == args.target:
            print(f"skip {path.name}: already {args.target}")
            continue
        destination = translated_path(path, source_language, args.target)
        if destination.exists() and not args.force:
            print(f"skip {destination.name}: translation already exists")
            continue
        destination = translate_file(path, args.target, args.force)
        print(f"wrote {destination.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (FileExistsError, RuntimeError, ValueError) as exc:
        print(f"error: {exc}", file=sys.stderr)
        raise SystemExit(2)
