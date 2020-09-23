import React, { Fragment } from "react"
import { Container } from "@rent_avail/layout"
import Link from "next/link"

export default function DefaultLayout({ children: content }) {
  return (
    <Fragment>
      <Container as="header" my="2rem">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Container>
      <Container my="4rem">{content}</Container>
    </Fragment>
  )
}
