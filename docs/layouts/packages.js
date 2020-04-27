import { frontMatter as components } from "../pages/packages/**/*.mdx"
import { Container } from "@rent_avail/layout"

export default (pageMatter) => {
  return ({ children: content }) => {
    return <Container my="4rem">{content}</Container>
  }
}
