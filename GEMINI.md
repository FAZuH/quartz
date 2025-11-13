# Project Overview

This is a [Quartz](https://quartz.jzhao.xyz/) project, a tool for publishing a digital garden and notes as a website. The content is written in Markdown and is located in the `content` directory. The project is configured to use a variety of plugins for features like syntax highlighting, LaTeX, and Obsidian-flavored markdown.

# Building and Running

The following commands are available in `package.json`:

*   **`npm run quartz -- <command>`**: Run the Quartz CLI. For example, `npm run quartz -- build` to build the site.
*   **`npm run docs`**: Build and serve the documentation.
*   **`npm run check`**: Run type checking and format checking.
*   **`npm run format`**: Format the code.
*   **`npm run test`**: Run tests.

To build and serve the site, you can use the following command:

```bash
npx quartz build --serve
```

# Development Conventions

The project uses [TypeScript](https://www.typescriptlang.org/) and [Prettier](https://prettier.io/) for code formatting. The configuration for these tools can be found in `tsconfig.json` and `.prettierrc` respectively.

The project also has a `CODE_OF_CONDUCT.md` file, which outlines the community standards.
