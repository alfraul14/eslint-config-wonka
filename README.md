
<h1 align="center">
  🤏 Wonka's ESLint + Prettier configuration
</h1>


<p align="center">
  💡 Opinionated linting configuration that embraces modern TypeScript best practices and ensures consistent import statements across your JavaScript or TypeScript projects. Perfect for keeping your codebase clean and maintainable 🚁
  <br />
  <br /> 
</p>

## 👀 How to use

1. Install the dependency.

   ```bash
   npm install --save-dev eslint-config-wonka
   ```

2. Add it to your `eslint.config.js`:

   ```js
   import eslintConfigWonka from "eslint-config-wonka";
   
   export default [
       // If you're using js
       ...eslintConfigWonka.js,
       // Or if you're using ts. The ts config includes the js one, so you don't need to include it manually.
       ...eslintConfigWonka.ts,
       {
           // Your config here
       }
   ]
   ```

   Also, you can use the `full` config, which includes the `js`, `ts` :

   ```js
   import eslintConfigWonka from "eslint-config-wonka";
   
   export default [
       ...eslintConfigWonka.full,
       {
           // Your config here
       }
   ]
   ```



> [!NOTE]  
> Some rules enabled by default require `strict: true` to be set in your `tsconfig.json`.

## 🤔 What it does

- Lints JavaScript using [
  `eslint:recommended`](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#using-eslintrecommended)
  and [Prettier](https://prettier.io/).
- Additionally, lints TypeScript using [`@typescript-eslint/recommended` and
  `@typescript-eslint/recommended-requiring-type-checking`](https://typescript-eslint.io/docs/linting/configs).
- Uses the following plugins:
    - [`import`](https://github.com/import-js/eslint-plugin-import/): helps validate proper imports.
    - [`simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort/): sorts imports.
    - [`unused-imports`](https://github.com/sweepline/eslint-plugin-unused-imports): finds and removes unused ES6 module
      imports.
- Uses rules inside the [configs](configs) folder.




