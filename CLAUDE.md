# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bare bones Node.js monorepo boilerplate for Node.js and TypeScript. The repository uses pnpm for package management and includes Turbo for build system capabilities.

## Monorepo Structure

- `packages/` - Shared packages and utilities
  - `utils/` - Common utility functions with TypeScript support
  - `types/` - Shared TypeScript type definitions (HTTP types, enums)
  - `tsconfig/` - Shared TypeScript configurations for different project types
- `apps/` - Application code (currently empty, ready for web apps, APIs, etc.)
- `functions/` - Serverless functions or cloud functions
  - `api/` - API functions with authentication endpoints
- `scripts/` - Internal Node.js scripts for development tasks

## Common Commands

```bash
# Install dependencies
pnpm install

# Run scripts
node scripts/sample.ts

# Lint code (configured via root package.json tasks)
pnpm lint
```

## Development Setup

- Uses TypeScript with ESLint configuration using flat config format
- ESLint extends recommended rules with TypeScript support
- ESLint configured to ignore dist/, build/, and other generated directories
- Turbo is configured for build orchestration (turbo.json present)
- Package naming follows `@repo/` convention (e.g., `@repo/utils`, `@repo/types`)
- Shared TypeScript configurations available in `@repo/tsconfig` package

## Architecture Notes

- Monorepo structure ready for scaling with multiple apps and shared packages
- TypeScript configuration uses root-level ESLint with TypeScript parser and flat config
- Shared packages include utilities, type definitions, and TypeScript configurations
- API functions include authentication endpoints (partially implemented)
- Scripts directory for custom development tooling
- Build outputs automatically ignored by ESLint to prevent linting compiled files