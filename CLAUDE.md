# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bare bones Node.js monorepo boilerplate for Node.js and TypeScript. The repository uses pnpm for package management and includes Turbo for build system capabilities.

## Monorepo Structure

- `packages/` - Shared packages and utilities
  - `utils/` - Common utility functions with TypeScript support
- `apps/` - Application code (currently empty, ready for web apps, APIs, etc.)
- `functions/` - Serverless functions or cloud functions (currently empty)
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

- Uses TypeScript with ESLint configuration
- ESLint extends recommended rules with TypeScript support
- Turbo is available for build orchestration (no turbo.json configured yet)
- Package naming follows `@repo/` convention (e.g., `@repo/utils`)

## Architecture Notes

- Monorepo structure ready for scaling with multiple apps and shared packages
- TypeScript configuration uses root-level ESLint with TypeScript parser
- Scripts directory for custom development tooling
- Empty apps/ and functions/ directories indicate this is a starting template