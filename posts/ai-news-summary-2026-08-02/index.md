.. title: AI News Summary 2026-08-02
.. slug: ai-news-summary-2026-08-02
.. date: 2026-08-02 08:00:00 UTC+00:00
.. tags: AI News
.. category: AI News
.. status: draft

# AI News Summary 2026-08-02

La edición de hoy está dominada por una misma idea: hacer más con menos. OpenAI empuja el coste por unidad de inteligencia hacia abajo, mientras que el resto del ecosistema acelera en MCP, creativos generativos, agentes y serving local.

## GAFAM y grandes empresas de IA
- OpenAI publicó [Building abundant intelligence](https://openai.com/index/building-abundant-intelligence/) y enlaza la actualización de precios anunciada un día antes: GPT‑5.6 Luna baja 80%, GPT‑5.6 Terra baja 20% y Fast mode para Sol llega hasta 2.5× de velocidad al doble de precio, sin cambio de inteligencia. Es una señal clara de que la competencia ya no va solo de capacidad, sino de economía operativa.
- La pieza también insiste en que la eficiencia del sistema —routing, contexto y herramientas— importa tanto como el modelo en sí. [Ver también la nota de pricing](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/).

## Influencers y blogs técnicos
- Simon Willison publicó [Stateless MCP has recaptured my interest (and inspired mcp-explorer and datasette-mcp)](https://simonwillison.net/2026/Jul/31/stateless-mcp/) y lo presenta como el cambio más importante del protocolo desde su lanzamiento. Su lectura es útil porque conecta el cambio de especificación con una pregunta práctica: cómo dar herramientas a agentes sin cargar con demasiada complejidad.
- El post también subraya que MCP 2.0 simplifica la implementación de clientes y servidores y lo hace más apto para aplicaciones web escalables. [Referencia del spec](https://blog.modelcontextprotocol.io/posts/2026-07-28/).

## Imagen generativa
- ComfyUI publicó [v0.29.2](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.29.2) con `Frontend fixes and new api/partner nodes`. No es el mayor lanzamiento del año, pero sí una actualización concreta y fresca del stack que mucha gente usa para producción visual.
- La señal de fondo sigue siendo la misma: el espacio de imagen generativa se está moviendo hacia integración, automatización y flujos de trabajo conectados, no solo a modelos aislados.

## Chatbots y agentes
- crewAI lanzó [1.15.10](https://github.com/crewAIInc/crewAI/releases/tag/1.15.10) y añadió `Collect skill usage events`, además de limpieza de documentación y ajustes de reporting.
- Aunque es una release pequeña, el detalle de telemetría importa: los frameworks de agentes están madurando hacia más observabilidad y control operativo.

## IA local y serving
- `llama.cpp` publicó [b10224](https://github.com/ggml-org/llama.cpp/releases/tag/b10224) el 2 de agosto a las 07:03 UTC con `ggml-webgpu: add support for f16 repeat (#26307)`. Unas horas antes también salió [b10223](https://github.com/ggml-org/llama.cpp/releases?per_page=5), así que la cadencia de releases está especialmente activa.
- Para quien sigue serving local, la lectura es sencilla: mejoras pequeñas en GPU/web y compatibilidad siguen siendo el tipo de progreso que más se nota en producción.
