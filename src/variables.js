export const sizing = 24

export const colors = {
  primary: "#137BB5",
  accent: "#50E3C2",
  dark: "#34495E",
  light: "#F7F7F9",
  ui: "#F2F2F2",
  lightGray: "#CED4D9",
  darkGray: "#9EA8B2",
  success: "#3CBC8D",
  alert: "#D84C48",
  warning: "#F1B40F",
  external: "#7860C0"
}

const theme = {
  colors: {
    ui: {
      dark: "#2F373D",
      semiDark: "#6C757A",
      main: "#ACB4B8",
      semiLight: "#EBF1F5",
      light: "#F9F8F8",
    },
    primary: {
      dark: "#364046",
      semiDark: "#7E8A91",
      main: "#077DB8",
      semiLight: "#DDE1E2",
      light: "#D7EAF5",
    },
    external: {
      dark: "#34113D",
      semiDark: "#63057A",
      main: "#9407B8",
      semiLight: "#E9BAF5",
      light: "#EFD7F5",
    },
    danger: {
      dark: "#3D1311",
      semiDark: "#990B06",
      main: "#D6413C",
      semiLight: "#F5BCBA",
      light: "#F5D8D7",
    },
    warning: {
      dark: "#3D3111",
      semiDark: "#7A5C0A",
      main: "#F5C60A",
      semiLight: "#F5E5BA",
      light: "#F2EAD5",
    },
    success: {
      dark: "#023D34",
      semiDark: "#057A69",
      main: "#069985",
      semiLight: "#A3D6CE",
      light: "#D7F5F1",
    }
  },
  sizing: 24,
  fontSize: "16px",
  fontFamily: "'Open Sans', Arial, sans-serif"
}

// color: ${({theme}) => theme.colors.ui.semiLight};
// margin: ${({theme}) => theme.sizing * 3}px 0;

export default theme
