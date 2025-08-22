import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
    js.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                console: 'readonly',
                process: 'readonly',
                Buffer: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                global: 'readonly',
                module: 'readonly',
                require: 'readonly',
                exports: 'readonly',
                React: 'readonly',
                HTMLElement: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
        },
        rules: {
            ...tseslint.configs.recommended.rules,
        },
    },
    {
        ignores: [
            'node_modules/',
            '**/dist/**',
            '**/build/**',
            '.turbo/',
            'coverage/',
            '.next/',
            '.nuxt/',
            '.output/',
            '.vite/',
            'tmp/',
            'temp/',
            '*.min.js',
            '*.min.css',
            '**/.next/**',
            '**/next-env.d.ts'
        ],
    },
];