import styled from "styled-components"
import { position, layout, flexbox, grid, space } from "styled-system"

const Flex = styled.section`
  ${position};
  ${layout};
  ${flexbox};
  ${grid};
  ${space};
`

Flex.defaultProps = {
  display: "flex",
}

export default Flex
