from pathlib import Path
import unittest

from scripts.ai_news_translate import detect_language, translated_path


class AiNewsTranslationTests(unittest.TestCase):
    def test_explicit_metadata_wins_over_heuristic(self):
        self.assertEqual(detect_language(".. lang: en\n\n## GAFAM y grandes empresas de IA"), "en")
        self.assertEqual(detect_language(".. lang: es\n\n## AI systems"), "es")

    def test_spanish_is_detected_when_metadata_is_missing(self):
        self.assertEqual(
            detect_language("La compañía publicó una actualización para los usuarios y hoy explicó el cambio."),
            "es",
        )

    def test_translation_paths_follow_nikola_convention(self):
        source = Path("portfolio/ai-news/ai-news-summary-2026-08-29.md")
        self.assertEqual(translated_path(source, "en", "es").name, "ai-news-summary-2026-08-29.es.md")
        self.assertEqual(translated_path(source, "es", "en").name, "ai-news-summary-2026-08-29.md")


if __name__ == "__main__":
    unittest.main()
