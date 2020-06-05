import styled from "styled-components"
import {
  color,
  grid,
  flexbox,
  space,
  layout,
  border,
  background,
} from "styled-system"

const Grid = styled.section.attrs(
  ({ columns, gridTemplateColumns, gap, gridGap }) => ({
    gridGap: gap || gridGap,
    gridTemplateColumns: columns
      ? `repeat(${columns}, 1fr)`
      : gridTemplateColumns,
  })
)`
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
  gridGap: "2rem",
}

function getSpan(span, offset) {
  const spanArr = Array.isArray(span) ? span : [span]
  const offsetArr = Array.isArray(offset) ? offset : [offset]
  return spanArr.map((span, idx) => {
    const start = offsetArr[idx] || offsetArr[offsetArr.length - 1] || "auto"
    return `${start} / span ${span}`
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
)`
  min-width: 0;
  ${grid};
  ${flexbox};
  ${space};
  ${layout};
  ${color};
  ${background};
  ${border};
`

Col.defaultProps = {
  gridColumn: "1 / -1",
}

export { Grid, Col }
