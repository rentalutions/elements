import styled from "styled-components"
import { space, layout, flexbox, grid, variant } from "styled-system"

const Stack = styled.section(
  { display: "grid" },
  space,
  layout,
  flexbox,
  grid,
  variant({
    variants: {
      vertical: {
        gridAutoFlow: "row",
      },
      horizontal: {
        gridAutoFlow: "column",
      },
    },
  })
)

Stack.defaultProps = {
  gridGap: "2rem",
  variant: "vertical",
}

export default Stack
