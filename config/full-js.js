import eslintPluginCheckFile from "eslint-plugin-check-file";

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
		plugins: {
			"check-file": eslintPluginCheckFile,
		},
		rules: {
			"prettier/prettier": [
				"error",
				{ printWidth: 110, useTabs: true, tabWidth: 4, endOfLine: "auto" },
			],
			"check-file/folder-naming-convention": [
				"error",
				{
					// hyphens (kebab-case folders), square brackets (Next.js dynamic routes), parentheses (Next.js route groups), numbers (i.e. i18n) and 3 consecutive dots i.e ([...rest]) are allowed
					"**/*": "+([a-z-0-9-\\[\\]\\(\\)\\.\\.\\.])",
				},
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
