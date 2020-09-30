import styled from "styled-components"
import {
  color,
  grid,
  flexbox,
  space,
  layout,
  border,
  background,
  compose,
} from "styled-system"
import { sx } from "@rent_avail/base"

const Grid = styled.section.attrs(
  ({ columns, gridTemplateColumns, gap, gridGap }) => ({
    gridGap: gap || gridGap,
    gridTemplateColumns: columns
      ? `repeat(${columns}, 1fr)`
      : gridTemplateColumns,
  })
)(
  {
    display: "grid",
  },
  compose(color, grid, flexbox, space, layout, border),
  sx
)

Grid.defaultProps = {
  gridTemplateColumns: "repeat(12, 1fr)",
  gridGap: "2rem",
}

function getSpan(span, offset) {
  const spanArr = Array.isArray(span) ? span : [span]
  const offsetArr = Array.isArray(offset) ? offset : [offset]
  return spanArr.map((spanItem, idx) => {
    const start = offsetArr[idx] || offsetArr[offsetArr.length - 1] || "auto"
    return `${start} / span ${spanItem}`
  })
}

const Col = styled.div.attrs(
  ({
    span = null,
    spanRow = null,
    gridColumn,
    gridRow,
    offset = null,
    offsetRow = null,
  }) => {
    const columns = span ? getSpan(span, offset) : gridColumn
    const rows = spanRow ? getSpan(spanRow, offsetRow) : gridRow
    return {
      gridColumn: columns,
      gridRow: rows,
    }
  }
)(
  { minWidth: 0 },
  compose(color, grid, flexbox, space, layout, border, background),
  sx
)

Col.defaultProps = {
  gridColumn: "1 / -1",
}

export { Grid, Col }
