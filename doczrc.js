import { css } from "styled-components"
import { colors } from "src/constants"
export default {
  title: "Avail Design Kit",
  wrapper: "utils/wrapper.js",
  menu: [
    "Getting Started",
    "Colors",
    "Typography",
    "Spacing",
    "Motion",
    "Component Overview",
    "Base"
  ],
  base: "/",
  public: "/public",
  // theme: "utils/theme.js"
  themeConfig: {
    mode: "light",
    showPlaygroundEditor: true,
    fonts: {
      display: "'Nunito', sans-serif",
      ui: "'Nunito', sans-serif",
      mono: "font-family: 'IBM Plex Mono', monospace"
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
      code: css`
        font-family: "IBM Plex Mono", monospace !important;
        background: ${colors.ui_300};
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
      `,
      h1: css`
        all: unset;
        display: block;
        font-size: 4rem !important;
        font-weight: 200 !important;
        margin-top: 5rem;
        margin-bottom: 3rem;
      `,
      // h2: css`
      //   all: unset;
      //   display: block;
      //   font-size: 4rem !important;
      //   font-weight: 400 !important;
      // `,
      // h3: css`
      //   all: unset;
      //   display: block;
      //   font-size: 3rem !important;
      //   font-weight: 400 !important;
      // `,
      // h4: css`
      //   all: unset;
      //   display: block;
      //   font-size: 2rem !important;
      //   font-weight: 400 !important;
      // `,
      // h5: css`
      //   all: unset;
      //   display: block;
      //   font-size: 1.5rem !important;
      //   font-weight: 800 !important;
      // `,
      a: css`
        font-weight: 400 !important;
      `,
      ol: css`
        margin: 2rem 0;
        list-style: decimal inside !important;
        counter-reset: none !important;
        li {
          &::before {
            display: none !important;
          }
        }
      `,
      table: css`
        text-align: left;
        vertical-align: text-top;
      `,
      td: css`
        padding: 1rem;
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
          href:
            "https://fonts.googleapis.com/css?family=IBM+Plex+Mono|Nunito:200,400,800&display=swap"
        },
        { rel: "icon", type: "image/png", href: "/icon-100.png" }
      ]
    }
  }
}
