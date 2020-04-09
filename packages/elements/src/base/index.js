import { createGlobalStyle } from "styled-components"
import { colors } from "../constants"

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  :root {
    font-size: 75%;
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
    font-family: "Nunito", sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.334;
    color: ${colors.ui_900};
  }

  h1,
  .type--hero {
    font-size: 5rem;
    font-weight: 200;
    line-height: 1.2;
  }
  h2,
  .type--headline {
    font-size: 4rem;
    font-weight: 400;
    line-height: 1.25;
  }
  h3,
  .type--title {
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.334;
  }
  h4,
  .type--subtitle {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.5;
  }
  h5,
  .type--emphasis {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.334;
  }

  ${"" /* Override for the timid */}
  .no-sizing {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`