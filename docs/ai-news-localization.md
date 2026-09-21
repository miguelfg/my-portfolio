# AI News localization

AI News has one source file per date and explicit language variants:

- English: `portfolio/ai-news/ai-news-summary-YYYY-MM-DD.md`
- Spanish: `portfolio/ai-news/ai-news-summary-YYYY-MM-DD.es.md`
- Both files carry `.. lang: en` or `.. lang: es`.

## Translation workflow

The repeatable workflow is implemented in `scripts/ai_news_translate.py`:

```bash
# Mark legacy entries with a detected language without translating them
python scripts/ai_news_translate.py --all --target en --annotate

# Create one missing variant
DEEPL_AUTH_KEY=... python scripts/ai_news_translate.py \
  --date 2026-08-28 --target en

# Create all missing variants after reviewing the provider configuration
DEEPL_AUTH_KEY=... python scripts/ai_news_translate.py \
  --all --target en
```

The script refuses to overwrite an existing variant unless `--force` is used,
keeps URLs and inline code protected, and exits non-zero when credentials or a
provider request is unavailable. It does not silently publish machine output.

## Provider decision

**DeepL API is the default integration.** It has a direct REST endpoint for text
translation, supports English and Spanish well, and its documented free API
quota is 500,000 characters per month. The implementation uses the Free API
endpoint by default (`https://api-free.deepl.com`); set `DEEPL_API_URL` for a
Pro account. See the [translation endpoint](https://developers.deepl.com/api-reference/translate/request-translation)
and [usage limits](https://developers.deepl.com/docs/resources/usage-limits).

Google Cloud Translation is a reasonable fallback when broader language
coverage, batch operations, or Cloud IAM are more important than a small
editorial pipeline. LibreTranslate is useful for a self-hosted/offline option,
but its public service is rate-limited and its Argos models generally need more
editorial review. An LLM API can improve style, but is intentionally not the
default because terminology and reproducibility need a glossary-oriented
translation service first.

Always review generated copy, links, headings, and terminology before changing
`status: draft` or deploying.
