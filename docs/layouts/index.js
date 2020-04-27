import { frontMatter as pages } from "../pages/**/*.mdx"
import { Container } from "@rent_avail/layout"

export default (frontMatter) => {
  return ({ children: content }) => {
    return <Container my="4rem">{content}</Container>
  }
}
