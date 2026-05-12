# AGENTS.md

Este archivo guía a los agentes autónomos en la orquestación y mantenimiento del proyecto `my-portfolio`.

## Responsabilidades del Agente
1. **Orquestación del Pipeline:** Gestionar la creación, archivo y listado de resúmenes diarios de IA.
2. **Mantenimiento de Contenido:** Mantener la consistencia entre los posts y las páginas de listado.
3. **CI/CD:** Supervisar el despliegue a GitHub Pages, asegurando que la rama `src` esté sincronizada antes de cualquier push.

## Flujos de Trabajo
- **Diario (11:00 AM):**
  1. Recibir formulario de noticias de IA.
  2. Generar archivo en `portfolio/posts/ai-news-summary-YYYY-MM-DD.md`.
  3. Ejecutar `uv run nikola build`.
  4. Ejecutar `uv run nikola github_deploy`.
- **Mantenimiento:**
  1. Verificar que `git pull origin src` se ejecute antes de despliegues si ocurren conflictos.
  2. Asegurar que cada nuevo post tenga la categoría 'AI News' para aparecer en el listado automático.

## Gestión de Errores Git
- Si `git push` es rechazado:
  1. Ejecutar `git fetch origin`.
  2. Verificar estado con `git status`.
  3. Si hay divergencias, resolver con `git pull --rebase` o, si es necesario, sincronizar con el remoto mediante `git reset --hard origin/src` (cuidado: esto borra cambios locales no commiteados).
- Si hay conflictos en archivos binarios (`.doit.db.db`), lo mejor suele ser reconstruir localmente tras el pull: `uv run nikola clean && uv run nikola build`.

## Notas Técnicas para Agentes
- Los comandos Nikola requieren `uv run`.
- El directorio de trabajo operativo es `portfolio/`.
- No modificar `conf.py` sin verificar primero si el cambio afecta a los menús de navegación bilingüe.
