# Portfolio Website

This is my portfolio website. I built it with React to refresh my knowledge and learn some new things.

## Tools

Built with
- React
- [MUI](https://mui.com/) for UI components

Tools Index
- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- [pnpm](https://pnpm.io/installation)
- [vite](https://vitejs.dev/guide/)
- Style
  - [prettier](https://prettier.io/docs/en/install.html)
  - [eslint](https://eslint.org/docs/latest/use/getting-started)
  - [husky](https://typicode.github.io/husky/) to run pre-commit hooks
- [woff2](https://github.com/google/woff2) converts TTF to WOFF2
- [i18next](https://www.i18next.com/) helps centralize text neatly in a JSON file
  - [react-i18next](https://react.i18next.com/)

## Development

Start the development server with `pnpm run dev`.

## Linting / Reformatting

```
# Lint
pnpm run lint

# Reformat
pnpm exec prettier . --write
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
