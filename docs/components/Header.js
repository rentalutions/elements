import "react"
import styled from "styled-components"
import { Container, Stack } from "@rent_avail/layout"
import Link from "next/link"
import { frontMatter as packages } from "../pages/packages/*.mdx"
import { formatPath } from "utils"

const HeaderWrapper = styled(Container).attrs((props) => ({ as: "header" }))`
  ul {
    list-style: none;
  }
`

export default function Header() {
  const menus = [{ title: "Packages", list: packages }]
  return (
    <HeaderWrapper my="2rem">
      {menus.map((menu) => (
        <Stack as="ul" variant="horizontal" key={menu.title}>
          <li>{menu.title}</li>
          {menu.list.map((page) => (
            <li key={page.__resourcePath}>
              <Link href={formatPath(page.__resourcePath)}>
                <a>{page.title}</a>
              </Link>
            </li>
          ))}
        </Stack>
      ))}
    </HeaderWrapper>
  )
}
