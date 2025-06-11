import babelParser from "@babel/eslint-parser";
import eslintJS from "@eslint/js";
import { defineConfig } from "eslint-define-config";
import importXPlugin from "eslint-plugin-import-x";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";

export default defineConfig([
  eslintJS.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSortPlugin,
      import: importXPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      //Possible Problems
      "array-callback-return": ["error", { checkForEach: true }],
      "no-await-in-loop": "error",
      "no-constructor-return": "error",
      "no-promise-executor-return": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "require-atomic-updates": "error",
      "no-use-before-define": [
        "error",
        {
          functions: false,
          classes: true,
          variables: true,
          allowNamedExports: false,
        },
      ],
      //Style
      curly: "error",
      "lines-between-class-members": ["error", "always"],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
      ],
      //Suggestions for good practices
      camelcase: ["error", { properties: "never" }],
      eqeqeq: "error",
      "new-cap": ["error", { capIsNew: false }],
      "consistent-return": "error",
      "no-console": ["error", { allow: ["error"] }],
      "no-else-return": ["error", { allowElseIf: false }],
      "no-extend-native": "error",
      "no-lonely-if": "error",
      "no-param-reassign": "error",
      "no-return-assign": "error",
      "no-throw-literal": "error",
      "no-magic-numbers": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-const": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      radix: "error",
      yoda: "error",

      //Plugins
      "import/first": "error", //reports any imports that come after non-import statements.
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/no-unresolved": "off",
      "import/no-webpack-loader-syntax": "off",
      "prettier/prettier": ["error", { printWidth: 100, useTabs: true }],
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
]);
