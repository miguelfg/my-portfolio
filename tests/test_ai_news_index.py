from __future__ import annotations

import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "portfolio" / "pages" / "ai-news.md"
POST_DIRS = [ROOT / "portfolio" / "ai-news", ROOT / "portfolio" / "posts"]

POST_RE = re.compile(r"ai-news-summary-(\d{4}-\d{2}-\d{2})\.md$")
LINK_RE = re.compile(r"/posts/ai-news-summary-(\d{4}-\d{2}-\d{2})/")


def discover_posts() -> list[str]:
    dates: set[str] = set()
    for folder in POST_DIRS:
        if not folder.exists():
            continue
        for path in folder.glob("ai-news-summary-*.md"):
            match = POST_RE.search(path.name)
            if match:
                dates.add(match.group(1))
    return sorted(dates, reverse=True)


def extract_index_dates() -> list[str]:
    text = PAGE.read_text(encoding="utf-8")
    return LINK_RE.findall(text)


class AiNewsIndexTests(unittest.TestCase):
    def test_index_covers_all_post_files(self) -> None:
        post_dates = discover_posts()
        index_dates = extract_index_dates()
        self.assertEqual(index_dates, post_dates)

    def test_index_has_no_daily_label(self) -> None:
        text = PAGE.read_text(encoding="utf-8")
        self.assertNotIn("Daily AI News Summary", text)
        self.assertNotIn("AI News Daily Summaries", text)
        self.assertIn("AI News Summaries", text)

    def test_index_is_descending_by_date(self) -> None:
        dates = extract_index_dates()
        self.assertEqual(dates, sorted(dates, reverse=True))


if __name__ == "__main__":
    unittest.main()
