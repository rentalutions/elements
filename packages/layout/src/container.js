import styled from "styled-components"
import { color, layout, space, flexbox } from "styled-system"
import { sx } from "@rent_avail/base"

const Container = styled.section`
  box-sizing: border-box;
  width: 100%;
  ${color};
  ${layout};
  ${space};
  ${flexbox};
  ${sx};
`

Container.defaultProps = {
  maxWidth: "84rem",
  mx: "auto",
  px: "2rem",
}

export default Container
