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

    def test_icij_investigations_backed_by_cv(self) -> None:
        cv = (ROOT / "docs" / "Miguel_Fiandor_CV.md").read_text(encoding="utf-8")
        for name in ("Panama Papers", "Pandora Papers", "Paradise Papers", "FinCEN Files", "Deforestation Inc"):
            if name in self.text:
                with self.subTest(name=name):
                    self.assertIn(name, cv)

    def test_no_personal_phone(self) -> None:
        self.assertNotIn("666", self.text)


class PortfolioPageTests(unittest.TestCase):
    PROJECT_URLS = [
        "https://github.com/miguelfg/courtlistener-cli",
        "https://github.com/miguelfg/api-to-cli-skillset",
        "https://youtu.be/taSEfkEFEIs",
        "https://subasta-data-tlwcqczo4a-no.a.run.app/dashboard/",
        "https://toyota-ocasion-stats-891726790351.europe-southwest1.run.app",
        "https://roadsurfer-dashboard-891726790351.europe-southwest1.run.app",
        "https://dashboard-polen-madrid-891726790351.europe-southwest1.run.app",
    ]

    def setUp(self) -> None:
        self.text = read_page("portfolio.rst")

    def test_slug_and_title_unchanged(self) -> None:
        meta = metadata(self.text)
        self.assertEqual(meta["slug"], "portfolio")
        self.assertEqual(meta["title"], "Portfolio")

    def test_every_cv_project_linked(self) -> None:
        for url in self.PROJECT_URLS:
            with self.subTest(url=url):
                self.assertIn(url, self.text)

    def test_engagements_present(self) -> None:
        self.assertIn("Ethon Shield", self.text)
        self.assertIn("International Consortium of Investigative Journalists", self.text)

    def test_cancer_calculus_has_no_link(self) -> None:
        self.assertIn("Cancer Calculus", self.text)
        self.assertNotIn("`Cancer Calculus <", self.text)

    def test_heading_underlines_long_enough(self) -> None:
        lines = self.text.splitlines()
        for title, underline in zip(lines, lines[1:]):
            if underline and set(underline) <= set("=-~") and len(underline) >= 3 and title.strip():
                with self.subTest(title=title):
                    self.assertGreaterEqual(len(underline), len(title))

    def test_named_link_texts_unique(self) -> None:
        # docutils warns and drops the target when two named links share a text
        names = re.findall(r"`([^`<]+?) <[^>]+>`_(?!_)", self.text)
        self.assertEqual(len(names), len(set(names)), names)

    def test_images_exist(self) -> None:
        for ref in re.findall(r"\.\. image:: (/images/\S+)", self.text):
            with self.subTest(ref=ref):
                self.assertTrue((ROOT / "portfolio" / ref.lstrip("/")).is_file())


if __name__ == "__main__":
    unittest.main()
