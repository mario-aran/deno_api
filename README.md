# TypeScript + Deno + MongoDB

This template was created manually.

---

## Development Instructions

1. Prepare Code

- `deno task install`: Install all dependencies
- `deno task update`: Update all dependencies
- `deno task format`: Run formatter
- `deno task lint`: Run linter and base typechecking

2. Prepare Database

- `docker compose up -d`: Launch database

3. Launch App

- `deno task dev`: Run app in development mode
- `deno task start`: Run app in production mode
- "http://localhost:8000/api": Access api

4. Managing NPM Packages

- `deno install npm:<package name>`: Install npm package in deno
- `deno uninstall <package name>`: Uninstall npm package in deno
