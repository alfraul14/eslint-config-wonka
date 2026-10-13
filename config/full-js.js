import wonkaTs from "./wonka-ts.js";

export default [
  ...wonkaTs,
  {
    ignores: [
      "**/.idea/",
      "**/.next/",
      "**/.storybook/",
      "**/.turbo/",
      "**/.yarn/",
      "**/node_modules/",
      "**/storybook-static/",
      "**/test-results/",
    ],
  },
  {
    rules: {
      "prettier/prettier": [
        "error",
        { printWidth: 110, useTabs: true, tabWidth: 4, endOfLine: "auto" },
      ],

      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Side effect imports: `import "./setup";`
            ["^\\u0000"],
            // Packages: `import fs from "fs";`
            ["^@?\\w"],
            // Internal packages.
            ["^(@|@wonka)(/.*|$)"],
            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports. Put same-folder imports and `.` last.
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports.
            ["^.+\\.s?css$"],
          ],
        },
      ],
      "no-use-before-define": [
        "error",
        {
          functions: false,
          classes: true,
          variables: true,
          allowNamedExports: false,
        },
      ],
    },
  },
];
