.. date: 2026-06-07
.. title: AI News Summary 2026-06-07
.. slug: ai-news-summary-2026-06-07
.. category: AI News

# AI News Summary 2026-06-07

## GAFAM y grandes empresas de IA

### Microsoft quiere más modelos propios dentro del trabajo diario

Microsoft presentó en Build 2026 su familia MAI, incluyendo MAI-Thinking-1, MAI-Code-1 y MAI-Image-2.5. El anuncio oficial sitúa estos modelos alrededor de Foundry, Copilot y aplicaciones de productividad, con MAI-Thinking-1 en private preview. Fuente: [Microsoft Official Blog](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work/).

La lectura: Microsoft está convirtiendo el control de modelos en una pieza de plataforma. No se trata solo de añadir más IA a Office o Azure, sino de controlar mejor coste, disponibilidad y capacidades estratégicas en razonamiento, código e imagen.

## Influencers y blogs técnicos

### Simon Willison pone el foco en ejecutar código de LLMs dentro de sandboxes pequeños

Simon Willison publicó una prueba técnica sobre ejecución de Python en un sandbox con MicroPython y WASM, conectada con su trabajo en Datasette Agent. Fuente: [Simon Willison's Weblog](https://simonwillison.net/).

La lectura: los agentes útiles necesitan operar sobre herramientas, no solo responder. Eso convierte la seguridad del entorno de ejecución en una parte central del producto. Un sandbox pequeño y auditable puede ser una respuesta práctica, siempre que se trate como mitigación y no como garantía absoluta.

## Imagen generativa

### MAI-Image-2.5 muestra cómo la generación visual entra en herramientas de productividad

Microsoft incluyó MAI-Image-2.5 y MAI-Image-2.5 flash dentro de la familia MAI, con capacidades text-to-image e image-to-image y presencia anunciada en PowerPoint, OneDrive y Foundry. Fuente: [Microsoft Official Blog](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work/).

La lectura: el movimiento importante está en la distribución. La generación de imagen empieza a vivir dentro de los documentos, presentaciones y archivos donde se trabaja, no solo en interfaces creativas separadas.

## Chatbots y agentes

### vLLM Themis apunta a agentes con sesiones, memoria y routing observable

vLLM publicó Semantic Router v0.3 Themis con routing agentic session-aware, dashboard, herramientas de despliegue y hooks para safety, replay, memory y RAG. Fuente: [vLLM Blog](https://vllm.ai/blog/2026-06-05-v0.3-vllm-sr-themis-release).

La lectura: los agentes de producción necesitan una capa de control que decida qué modelo usar, cómo mantener contexto de sesión y cómo observar decisiones. Themis encaja en esa transición desde demos de agentes hacia sistemas operables.

### El sandboxing de código también es infraestructura de agentes

La entrada de Simon Willison sobre MicroPython y WASM es relevante también para agentes porque aborda la ejecución de código generado por modelos dentro de un entorno restringido. Fuente: [Simon Willison's Weblog](https://simonwillison.net/).

La lectura: cuando un agente puede escribir y ejecutar código, el runtime se vuelve parte del perímetro de seguridad. La calidad del agente dependerá tanto del modelo como de los límites técnicos que rodean su ejecución.

## IA local y serving

### Gemma 4 QAT refuerza el camino hacia modelos locales más prácticos

Google publicó checkpoints Gemma 4 con quantization-aware training para reducir memoria y facilitar inferencia on-device, con compatibilidad señalada para rutas como GGUF/llama.cpp, vLLM, Ollama, LM Studio, LiteRT-LM, Transformers.js, SGLang y MLX. Fuente: [Google Blog](https://blog.google/innovation-and-ai/technology/developers-tools/quantization-aware-training-gemma-4/).

La lectura: el avance relevante está en hacer que modelos open-weight funcionen mejor en los formatos que ya usan los desarrolladores. Menos memoria y más compatibilidad significan más posibilidades reales para productos locales, edge y prototipos que no dependen siempre de una API remota.

### Ollama 0.30 suma madurez al stack local basado en GGUF

Ollama 0.30 se presenta como una mejora de rendimiento y soporte de modelos con GGUF vía llama.cpp, con soporte MLX para Apple Silicon. Fuente: [Ollama Blog](https://ollama.com/blog).

La lectura: el stack local avanza por mejoras incrementales pero muy prácticas. Cada mejora de compatibilidad reduce fricción para evaluar modelos, correrlos en hardware propio y construir herramientas pequeñas sin depender por defecto de serving centralizado.
