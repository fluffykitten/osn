---
trigger: always_on
---

# SVG diagrams

Before creating, recreating, or editing any SVG diagram for study materials
(IGCSE, A/AS Level, or any `<svg data-diagram="…">`), read and follow the
`svg-diagrams` skill at `.agents/skills/svg-diagrams/SKILL.md`.

A diagram is not done until
`node .agents/skills/svg-diagrams/scripts/validate-svg.mjs <file>` reports zero
errors **and** a real render has been visually checked.

Do not restyle legacy SMA/OSN SVGs (those without `data-diagram`) unless the user asks.
