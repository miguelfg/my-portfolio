.. date: 2026-06-13 08:25:16 UTC
.. title: AI News Summary 2026-06-13
.. slug: ai-news-summary-2026-06-13
.. category: AI News
.. tags: AI News, AI, news, summary

# AI News — 2026-06-13

## GAFAM y grandes empresas de IA

### Anthropic desactiva Claude Fable 5 y Mythos 5 por una directiva de control de exportaciones

Anthropic publicó que una directiva de control de exportaciones del gobierno de EE. UU. le exigió desactivar Claude Fable 5 y Claude Mythos 5 para todos los clientes, mientras que otros modelos de la compañía no se vieron afectados. La noticia convierte una semana de lanzamiento frontier en una historia de gobernanza, disponibilidad y riesgo de dependencia para clientes que construyen sobre modelos cerrados. Fuente: [Anthropic](https://www.anthropic.com/news/fable-mythos-access).

### NVIDIA presenta AgentPerf como benchmark de infraestructura para agentes

NVIDIA publicó resultados de AgentPerf de Artificial Analysis y afirmó que GB300 NVL72 ejecutó hasta 20 veces más agentes por megavatio que sistemas Hopper/H200 en la carga evaluada. Más allá de la cifra concreta, el movimiento apunta a una tendencia importante: los agentes empiezan a medirse por coste, energía y eficiencia de infraestructura, no solo por calidad del modelo. Fuente: [NVIDIA](https://blogs.nvidia.com/blog/nvidia-blackwell-agentperf-artificial-analysis/).

## Influencers y blogs técnicos

### Simon Willison muestra cómo se ve un agente de código realmente proactivo

Simon Willison documentó una sesión de depuración con Claude Fable 5 en Claude Code en la que el agente creó páginas HTML de prueba, usó capturas de Safari, ejecutó Playwright, modificó plantillas y levantó un servidor Python local para telemetría. El post es valioso porque baja la conversación sobre agentes a decisiones concretas de ingeniería: permisos, sandboxing, automatización de navegador, observabilidad y control de coste. Fuente: [Simon Willison](https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/).

### La experiencia técnica con Fable queda marcada por la suspensión de acceso

Simon Willison también comentó la declaración de Anthropic sobre la directiva que desactivó Fable 5 y Mythos 5. La combinación de experiencia práctica y suspensión posterior deja una lectura clara para builders: los agentes más capaces también exigen planes de fallback cuando el acceso a modelos específicos puede cambiar de forma abrupta. Fuentes: [Simon Willison](https://simonwillison.net/2026/Jun/13/us-government-directive-to-suspend-access/) y [Anthropic](https://www.anthropic.com/news/fable-mythos-access).

## Imagen generativa

### Canva Magic Layers convierte imágenes generadas en diseños editables

Canva publicó el 7 de junio que Magic Layers está disponible dentro de Gemini y ChatGPT para convertir imágenes generadas por IA en diseños editables por capas en Canva. No apareció una fuente primaria más fresca para imagen generativa en la revisión del 13 de junio, así que esta pieza se mantiene con caveat de fecha: el punto relevante es que la imagen generada empieza a integrarse en flujos de edición y producción, no solo en generación de piezas finales. Fuente: [Canva](https://www.canva.com/newsroom/news/magic-layers-ai-assistants/).

## Chatbots y agentes

### DoorDash lleva la conversación al flujo de compra

DoorDash anunció Ask DoorDash, una interfaz conversacional para buscar comida y productos de supermercado, usar enlaces de recetas, interpretar fotos de listas o libros de cocina, construir carritos y pedir reservas. La función está disponible en zonas seleccionadas de iOS y la compañía planea ampliarla. Es una señal de agentes integrados en superficies transaccionales reales, no solo en asistentes independientes. Fuente: [DoorDash](https://about.doordash.com/en-us/news/ask-doordash).

### La disponibilidad de modelos se vuelve parte del diseño de agentes

La desactivación de Fable 5 y Mythos 5 por una directiva de control de exportaciones, comunicada por Anthropic, muestra que los equipos que construyen agentes sobre modelos frontier deben planificar continuidad de servicio, proveedores alternativos y degradación controlada de capacidades. El problema de producto no es solo elegir el mejor modelo, sino diseñar qué ocurre cuando ese modelo deja de estar disponible. Fuente: [Anthropic](https://www.anthropic.com/news/fable-mythos-access).

## IA local y serving

### vLLM añade serving day-0 para MiniMax M3 y contexto de 1M tokens

vLLM publicó soporte de serving para MiniMax M3 con contexto de 1M tokens, MiniMax Sparse Attention, parsers multimodales y de razonamiento, pesos MXFP8 MoE, EAGLE3 speculative decoding, validación y guía de despliegue. Es la pieza técnica más fuerte del día para IA local y serving porque muestra cómo las pilas abiertas de inferencia intentan absorber modelos de largo contexto y razonamiento multimodal desde el lanzamiento. Fuente: [vLLM](https://vllm.ai/blog/2026-06-12-minimax-m3-vllm).

### Ollama mejora inferencia local en Apple Silicon con MLX

Ollama publicó mejoras de su motor MLX para Apple Silicon, con foco en calidad, velocidad y uso de memoria, además de soporte NVFP4, snapshots para flujos de agentes y pruebas con hasta 20% más velocidad de salida en los escenarios descritos. Es una señal práctica para desarrolladores que quieren ejecutar modelos localmente con mejor rendimiento en hardware de consumo. Fuente: [Ollama](https://ollama.com/blog/mlx-performance).
