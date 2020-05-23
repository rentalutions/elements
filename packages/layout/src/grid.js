import React, { forwardRef, Children, cloneElement } from "react"
import styled from "styled-components"
import { color, grid, flexbox, space, layout, border } from "styled-system"

const Grid = styled.section.attrs(({ columns, gridTemplateColumns }) => ({
  gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : gridTemplateColumns
}))`
  display: grid;
  ${grid};
  ${flexbox};
  ${space};
  ${layout};
  ${color};
  ${border};
`

Grid.defaultProps = {
  gridTemplateColumns: "repeat(12, 1fr)",
  gridGap: "2rem"
}

const Col = styled.div.attrs(
  ({
    span = [],
    spanRow = [],
    gridColumn,
    gridRow,
    offset = [],
    offsetRow = []
  }) => {
    const columnArray = [...span].map(
      (span, idx) =>
        `${offset[idx] || offset[offset.length - 1] || "auto"} / span ${span}`
    )
    const rowArray = [...spanRow].map(
      (spanRow, idx) =>
        `${offsetRow[idx] ||
          offsetRow[offsetRow.length - 1] ||
          "auto"} / span ${spanRow}`
    )
    const columns = span.length ? columnArray : gridColumn

    const rows = spanRow.length ? rowArray : gridRow
    return {
      gridColumn: columns,
      gridRow: rows
    }
  }
)`
  min-width: 0;
  ${grid};
  ${flexbox};
  ${space};
  ${layout};
  ${color};
`

Col.defaultProps = {
  gridColumn: "1 / -1"
}

export { Grid, Col }
