import { createGlobalStyle } from "styled-components"

const colors = {
  ui_100: "#ffffff",
  ui_300: "#f3f3f3",
  ui_500: "#c7c7c7",
  ui_700: "#6f6f6f",
  ui_900: "#2d2d2d",

  blue_100: "#e9edf1",
  blue_300: "#7c95b0",
  blue_500: "#0f3e6f",
  blue_700: "#0b2e51",
  blue_900: "#0a2847",

  gold_100: "#fdf9e9",
  gold_300: "#fbeab3",
  gold_500: "#f9de89",
  gold_700: "#b6a264",
  gold_900: "#443d26",

  green_100: "#dff9f3",
  green_300: "#9fefdd",
  green_500: "#50e3c2",
  green_700: "#3ba68e",
  green_900: "#163e35",

  straw_100: "#fefef5",
  straw_300: "#fefce3",
  straw_500: "#fefacc",
  straw_700: "#e7e4ba",
  straw_900: "#a2a082",

  red_300: "#F6A5B4",
  red_500: "#EC4261",

  purple_300: "#B7B5EE",
  purple_500: "#6965D5",
}

export const theme = {
  breakpoints: ["40rem", "60rem", "80rem", "100rem", "120rem"],
  colors,
  fonts: {
    body: "'Nunito', -apple-system, 'Segoe UI', sans-serif",
    legal: "'Noto Serif', serif",
  },
  fontWeights: ["200", "400", "600", "800"],
  lineHeights: {
    hero: "1.2",
    small: "1.25",
    normal: "1.334",
    large: "1.5",
  },
  space: [0, 12, 24, 36, 48, 60, 72, 84, 96],
  shadows: [
    "0 1px 3px rgba(0,0,0.12)",
    "0 3px 6px rgba(0,0,0,0.24)",
    "0 12px 24px -12px rgba(0,0,0,0.36)",
  ],
  buttons: {
    primary: {
      color: colors.ui_100,
      background: colors.blue_500,
      borderColor: colors.blue_500,
      "&:hover": {
        background: colors.blue_700,
        color: colors.blue_300,
      },
    },
    danger: {
      color: colors.red_500,
      borderColor: colors.red_500,
    },
  },
}

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    font-size: 12px;
  }

  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strong, sub, sup, var,
  b, u, i, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.334;
    color: ${({ theme }) => theme.colors.ui_900};
  }

  h1 {
    font-size: 5rem;
    font-weight: 200;
    line-height: 1.2;
  }
  h2 {
    font-size: 4rem;
    font-weight: 400;
    line-height: 1.25;
  }
  h3 {
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.334;
  }
  h4 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.5;
  }
  h5 {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.334;
  }
`
