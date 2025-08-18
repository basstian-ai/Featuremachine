# Featuremachine

A clean repository prepared to work with an external AI Dev Agent. Product code lives here; the agent is released separately.

## What lives where
- `.ai/` — agent config, guardrails, roadmap, backlog, templates
- `.github/workflows/` — CI and the agent workflow
- `src/` — application code (add your stack here)
- `docs/` — project documentation

## Agent usage
- Runs in PR-only mode and must pass CI.
- Only modifies files allowed by `.ai/guardrails.yml`.
- Pulls work from `.ai/backlog/tasks.md` and `.ai/backlog/bugs.md`.
- Vision (`.ai/roadmap/vision.md`) is protected by CODEOWNERS.
