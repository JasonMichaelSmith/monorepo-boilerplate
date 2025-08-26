import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        ignores: [
            "node_modules/**",
            ".next/**",
            "out/**",
            "build/**",
            "next-env.d.ts",
        ],
    },
    {
        languageOptions: {
            globals: {
                fetch: "readonly",
                Request: "readonly",
                Response: "readonly",
                Headers: "readonly",
                URL: "readonly",
                URLSearchParams: "readonly",
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                jsx: true,
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
        },
    },
];

export default eslintConfig;
