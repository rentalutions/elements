import { css } from "styled-components"

export default {
  title: "Avail Design Kit",
  wrapper: "utils/wrapper.js",
  menu: ["Getting Started", "Colors", "Baseline Grids", "Component Overview", "Base"],
  base: "/",
  public: "/public",
  // theme: "utils/theme.js"
  themeConfig: {
    mode: "light",
    showPlaygroundEditor: true,
    fonts: {
      display: "Nunito, sans-serif",
      ui: "Nunito, sans-serif",
      mono: "'IBM Plex Mono', monospace"
    },
    colors: {
      primary: "#0f3e6f",
      grayUltraLight: "#f3f3f3",
      grayExtraLight: "#c7c7c7",
      grayLight: "#6f6f6f",
      gray: "#2d2d2d"
    },
    styles: {
      playground: css`
        padding: 3rem;
      `,
      pre: css`
        font-size: 1.33rem;
      `,
      h1: css`
        font-size: 5rem !important;
        font-weight: 200 !important;
      `,
      a: css`
        font-weight: 400 !important;
      `
    }
  },
  codemirrorTheme: "material",
  htmlContext: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://codemirror.net/theme/material.css"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Nunito:200,400,800&display=swap"
        }
      ]
    }
  }
}
