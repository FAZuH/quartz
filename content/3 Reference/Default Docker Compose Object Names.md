---
{"creation-time":"2025-04-17 08:52","status":"baby","tags":null,"parent":["[[docker]]"],"publish":true,"PassFrontmatter":true}
---


- **Volume**: `<stack_name>_<volume_name>`.
- **Container**: `<stack_name>_<service_name>_1`.
- **Network**: `<stack_name>_default` (or `<stack_name>_<network_name>` if custom, e.g., `<stack_name>_portainer`).

Project name (`<stack_name>`) comes from the directory unless overridden (e.g., via `COMPOSE_PROJECT_NAME` or `-p`).