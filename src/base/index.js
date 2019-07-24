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
    line-height: 1.333;
    color: ${colors.ui_900};
  }

  h1,h2,h3,h4,h5 {
    line-height: 1.5;
  }

  h1,
  .hero {
    font-size: 5rem;
    font-weight: 200;
  }
  h2,
  .headline {
    font-size: 4rem;
    font-weight: 400;
  }
  h3,
  .title {
    font-size: 3rem;
    font-weight: 400;
  }
  h4,
  .subtitle {
    font-size: 2rem;
    font-weight: 400;
  }
  h5,
  .emphasis {
    font-size: 1.5rem;
    font-weight: 800;
  }

  img {
    max-width: 100%;
  }
`
