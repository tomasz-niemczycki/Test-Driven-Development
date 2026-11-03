import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.json5"],
    plugins: { json },
    language: "json/json5",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/commonmark",
    extends: ["markdown/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
  {
    files: ["**/*.ts"],

    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],

    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },

    rules: {
      // =================================
      // BEZPIECZEŃSTWO TYPESCRIPT
      // =================================

      "@typescript-eslint/no-explicit-any": "error",

      "@typescript-eslint/no-non-null-assertion": "error",

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

      "@typescript-eslint/explicit-module-boundary-types": "error",

      // =================================
      // ZMIENNE I IMPORTY
      // =================================

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrors: "none",
          ignoreRestSiblings: true,
        },
      ],

      // =================================
      // CZYTELNOŚĆ KODU
      // =================================

      eqeqeq: ["error", "always"],

      curly: ["error", "all"],

      "no-var": "error",

      "prefer-const": "error",

      "no-else-return": "error",

      "object-shorthand": "error",

      "prefer-template": "error",

      // =================================
      // BEZPIECZNE OPERACJE
      // =================================

      "@typescript-eslint/no-floating-promises": "error",

      "@typescript-eslint/no-misused-promises": "error",

      "@typescript-eslint/await-thenable": "error",

      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
          allowNullableBoolean: false,
          allowNullableString: false,
          allowNullableNumber: false,
        },
      ],

      // =================================
      // DODATKOWE
      // =================================

      "no-console": "off",

      "no-debugger": "error",

      complexity: ["warn", { max: 2 }],
    },
  },
]);
