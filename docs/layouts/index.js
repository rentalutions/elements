import { Fragment } from "react"
import { Container } from "@rent_avail/layout"
import Header from "components/Header"

export default frontMatter => {
  return ({ children: content }) => {
    return (
      <Fragment>
        <Header />
        <Container my="4rem">{content}</Container>
      </Fragment>
    )
  }
}
