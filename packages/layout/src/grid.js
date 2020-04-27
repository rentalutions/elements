import React, { forwardRef, Children, cloneElement } from "react"
import styled from "styled-components"
import { color, grid, flexbox, space, layout } from "styled-system"

const Grid = styled.section`
  display: grid;
  ${grid};
  ${flexbox};
  ${space};
  ${layout};
  ${color};
`

Grid.defaultProps = {
  gridTemplateColumns: "repeat(12, 1fr)",
  gridGap: "2rem",
}

const Col = styled.div`
  ${grid};
  ${flexbox};
  ${space};
  ${layout};
  ${color};
`

Col.defaultProps = {
  gridColumn: "1 / -1",
}

export { Grid, Col }
