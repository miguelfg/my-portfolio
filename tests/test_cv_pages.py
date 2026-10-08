from __future__ import annotations

import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "portfolio" / "pages"
META_RE = re.compile(r"^\.\. (\w+):[ \t]*(.*)$", re.MULTILINE)


def read_page(name: str) -> str:
    return (PAGES / name).read_text(encoding="utf-8")


def metadata(text: str) -> dict[str, str]:
    return {key: value.strip() for key, value in META_RE.findall(text)}


class ServicesPageTests(unittest.TestCase):
    def setUp(self) -> None:
        self.text = read_page("services.md")

    def test_slug_and_title_unchanged(self) -> None:
        meta = metadata(self.text)
        self.assertEqual(meta["slug"], "services")
        self.assertEqual(meta["title"], "Services")

    def test_description_matches_cv_positioning(self) -> None:
        self.assertIn("AI & data engineering", metadata(self.text)["description"])

    def test_four_cv_services_in_order(self) -> None:
        titles = re.findall(r"^## (.+)$", self.text, re.MULTILINE)
        self.assertEqual(
            titles[:4],
            [
                "GenAI solutions & agentic systems",
                "Data pipelines & extraction",
                "Graph & investigative data",
                "Dashboards & internal tools",
            ],
        )

    def test_links_to_cv_and_contact(self) -> None:
        self.assertIn("/Miguel_Fiandor_CV.pdf", self.text)
        self.assertIn("/pages/contact-me", self.text)

    def test_no_personal_phone(self) -> None:
        self.assertNotIn("666", self.text)


if __name__ == "__main__":
    unittest.main()
