import styled from "styled-components"
import { color, layout, space, flexbox } from "styled-system"

const Container = styled.section`
  box-sizing: border-box;
  width: 100%;
  ${color};
  ${layout};
  ${space};
  ${flexbox};
`

Container.defaultProps = {
  maxWidth: "84rem",
  mx: "auto",
  px: "2rem",
}

export default Container
