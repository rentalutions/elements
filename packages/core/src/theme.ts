import { transparentize } from "polished"

const baseColors = {
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

const availColors = {
  background: {
    primary: baseColors.ui_100,
    secondary: baseColors.ui_300,
    inverse: baseColors.ui_900,
    overlay: transparentize(0.3, baseColors.ui_900),
  },
  brand: {
    primary: baseColors.blue_500,
    secondary: baseColors.gold_500,
  },
  text: {
    primary: baseColors.ui_900,
    secondary: baseColors.ui_700,
    inverse: baseColors.ui_100,
    subtle: baseColors.ui_500,
  },
  border: {
    primary: baseColors.ui_700,
    secondary: baseColors.ui_500,
    subtle: baseColors.blue_300,
  },
  interactive: {
    default: baseColors.blue_900,
    hover: baseColors.blue_700,
    focus: baseColors.blue_500,
    disabled: baseColors.ui_500,
  },
  status: {
    error: baseColors.red_500,
    warning: baseColors.purple_500,
    success: baseColors.green_500,
    info: baseColors.blue_500,
  },
  alpha(alpha) {
    return transparentize(alpha, baseColors.ui_900)
  },
}

export const baseTheme = {
  containerWidth: "80rem",
  breakpoints: ["480px", "720px", "960px", "1200px", "1440px"],
  colors: { ...baseColors, ...availColors },
  fonts: {
    body: "'Nunito', -apple-system, 'Segoe UI', sans-serif",
    legal: "'Noto Serif', serif",
    monospace: "'IBM Plex Mono', Courier, monospace",
  },
  fontSizes: {
    small: "1.334rem",
    body: "1.5rem",
    subtitle: "2rem",
    title: "3rem",
    headline: "4rem",
    hero: "5rem",
  },
  fontWeights: {
    light: 200,
    regular: 400,
    bold: 600,
    black: 800,
  },
  lineHeights: {
    small: "1.5",
    body: "1.334",
    heading: "1.25",
  },
  space: [0, 12, 24, 36, 48, 60, 72, 84, 96],
  shadows: [
    "0 0.084rem 0.25rem rgba(0,0,0.12)",
    "0 0.25rem 0.5rem rgba(0,0,0,0.12)",
    "0 1rem 1rem -1rem rgba(0,0,0,0.12)",
  ],
  radii: {
    button: "0.25rem",
    card: "0.25rem",
    input: "0.25rem",
    modal: "0.25rem",
    round: "99999px",
  },
  text: {
    body: {
      lineHeight: "body",
      fontSize: "body",
    },
    small: {
      lineHeight: "small",
      fontSize: "small",
    },
    subtitle: {
      lineHeight: "heading",
      fontSize: "subtitle",
    },
    title: {
      lineHeight: "heading",
      fontSize: "title",
    },
    headline: {
      lineHeight: "heading",
      fontSize: "headline",
    },
    hero: {
      lineHeight: "heading",
      fontSize: "hero",
    },
  },
}
