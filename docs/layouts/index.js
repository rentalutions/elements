import Base, { theme } from "@rent_avail/base"
import { ThemeProvider } from "styled-components"
import { frontMatter as pages } from "../pages/**/*.mdx"

export default (frontMatter) => {
  console.log(pages)
  return ({ children: content }) => {
    return (
      <ThemeProvider theme={theme}>
        <Base />
        {content}
      </ThemeProvider>
    )
  }
}
