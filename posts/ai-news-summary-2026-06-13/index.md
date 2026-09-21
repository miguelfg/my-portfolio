.. date: 2026-06-13 08:25:16 UTC
.. title: AI News Summary 2026-06-13
.. slug: ai-news-summary-2026-06-13
.. category: AI News
.. status: draft
.. tags: AI News, AI, news, summary

.. lang: en
# AI News — June 13, 2026

## GAFAM and Major AI Companies

### Anthropic Shuts Down Claude Fable 5 and Mythos 5 Due to an Export Control Directive

Anthropic announced that a U.S. government export control directive required it to deactivate Claude Fable 5 and Claude Mythos 5 for all customers, while the company’s other models were unaffected. The news turns a week of frontier launches into a story of governance, availability, and dependency risk for customers building on closed models. Source: [Anthropic](https://www.anthropic.com/news/fable-mythos-access).

### NVIDIA Introduces AgentPerf as an Infrastructure Benchmark for Agents

NVIDIA published AgentPerf results from Artificial Analysis and stated that the GB300 NVL72 ran up to 20 times more agents per megawatt than Hopper/H200 systems on the evaluated workload. Beyond the specific figure, this development points to an important trend: agents are beginning to be evaluated based on cost, energy consumption, and infrastructure efficiency—not just model quality. Source: [NVIDIA](https://blogs.nvidia.com/blog/nvidia-blackwell-agentperf-artificial-analysis/).

## Influencers and Tech Blogs

### Simon Willison Shows What a Truly Proactive Code Agent Looks Like

Simon Willison documented a debugging session with Claude Fable 5 on Claude Code in which the agent created test HTML pages, used Safari screenshots, ran Playwright, modified templates, and set up a local Python server for telemetry. The post is valuable because it grounds the conversation about agents in concrete engineering decisions: permissions, sandboxing, browser automation, observability, and cost control. Source: [Simon Willison](https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/).

### The technical experience with Fable is marked by the suspension of access

Simon Willison also commented on Anthropic’s statement regarding the policy that disabled Fable 5 and Mythos 5. The combination of hands-on experience and subsequent suspension offers a clear lesson for builders: even the most capable agents require fallback plans when access to specific models can change abruptly. Sources: [Simon Willison](https://simonwillison.net/2026/Jun/13/us-government-directive-to-suspend-access/) and [Anthropic](https://www.anthropic.com/news/fable-mythos-access).

## Generative Imaging

### Canva Magic Layers Turns Generated Images into Editable Designs

Canva announced on June 7 that Magic Layers is available within Gemini and ChatGPT to convert AI-generated images into editable, layered designs in Canva. No more recent primary source on generative imagery appeared in the June 13 review, so this section remains subject to a date-related caveat: the key point is that generative imagery is beginning to be integrated into editing and production workflows, not just for generating final pieces. Source: [Canva](https://www.canva.com/newsroom/news/magic-layers-ai-assistants/).

## Chatbots and Agents

### DoorDash Brings Conversation into the Purchase Process

DoorDash announced Ask DoorDash, a conversational interface for searching for food and grocery items, using recipe links, interpreting photos of shopping lists or cookbooks, building shopping carts, and making reservations. The feature is available in select iOS regions, and the company plans to expand it. This signals the integration of agents into actual transactional surfaces, not just standalone assistants. Source: [DoorDash](https://about.doordash.com/en-us/news/ask-doordash).

### Model availability becomes part of agent design

The deactivation of Fable 5 and Mythos 5 due to an export control directive, as announced by Anthropic, shows that teams building agents on frontier models must plan for service continuity, alternative providers, and controlled degradation of capabilities. The product challenge isn’t just choosing the best model, but designing what happens when that model becomes unavailable. Source: [Anthropic](https://www.anthropic.com/news/fable-mythos-access).

## On-Premises AI and Serving

### vLLM Adds Day-0 Serving for MiniMax M3 and 1M-Token Context

vLLM released serving support for MiniMax M3 with 1M-token context, MiniMax Sparse Attention, multimodal and reasoning parsers, MXFP8 MoE weights, EAGLE3 speculative decoding, validation, and deployment guidance. This is the most significant technical development of the day for on-device AI and serving, as it demonstrates how open inference stacks are working to support long-context models and multimodal reasoning right from launch. Source: [vLLM](https://vllm.ai/blog/2026-06-12-minimax-m3-vllm).

### Ollama Improves On-Premises Inference on Apple Silicon with MLX

Ollama released improvements to its MLX engine for Apple Silicon, focusing on quality, speed, and memory usage, as well as NVFP4 support, snapshots for agent flows, and tests showing up to a 20% increase in output speed in the described scenarios. This is a practical development for developers who want to run models locally with better performance on consumer hardware. Source: [Ollama](https://ollama.com/blog/mlx-performance).
