import React, { forwardRef, Children, cloneElement } from "react"
import styled from "styled-components"
import { color, grid, flexbox, space, layout } from "styled-system"

const Grid = styled.section.attrs(({ columns, gridTemplateColumns }) => ({
  gridTemplateColumns: columns
    ? `repeat(${columns}, 1fr)`
    : gridTemplateColumns,
}))`
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

const Col = styled.div.attrs(({ span, spanRow, gridColumn, gridRow }) => {
  const columnArray = Array.isArray(span)
  const rowArray = Array.isArray(spanRow)
  const columns =
    span && columnArray
      ? span.map((col) => `span ${col}`)
      : span
      ? `span ${span}`
      : gridColumn
  const rows =
    spanRow && rowArray
      ? spanRow.map((row) => `span ${row}`)
      : spanRow
      ? `span ${spanRow}`
      : gridRow
  return {
    gridColumn: columns,
    gridRow: rows,
  }
})`
  min-width: 0;
  ${grid};
  ${flexbox};
  ${space};
  ${layout};
  ${color};
`

Col.defaultProps = {
  gridColumn: "1 / -1",
  gridRow: "auto",
}

export { Grid, Col }
