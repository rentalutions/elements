import React, { forwardRef, Children, cloneElement } from "react"
import styled from "styled-components"

function getIndex(arr, index) {
  return arr[index] ? arr[index] : arr[arr.length - 1]
}

function getOffset(offset, index) {
  const start = getIndex(offset, index)
  return start === "auto" ? "auto" : start + 1
}

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(${({ theme: { columns } }) => columns}, 1fr);
  grid-gap: ${({ theme: { gap } }) => gap}rem;
`

function GridContainer(
  {
    children,
    theme = {
      columns: 12,
      gap: 2,
      breakPoints: {
        xsm: 40,
        sm: 60,
        md: 80,
        lg: 100,
        xlg: 120,
      },
    },
    ...props
  },
  ref
) {
  const childProps = { ...theme.breakPoints }
  return (
    <StyledGrid ref={ref} theme={theme} {...props}>
      {Children.map(children, (child) =>
        child ? cloneElement(child, childProps) : null
      )}
    </StyledGrid>
  )
}

const Col = styled.div`
  ${({ offset, span, offsetRow, spanRow }) => `
    grid-column: ${getOffset(offset, 0)} / span ${getIndex(span, 0)};
    grid-row: ${getOffset(offsetRow, 0)} / span ${getIndex(spanRow, 0)};
  `}
  @media (min-width: ${({ xsm }) => xsm}rem) {
    ${({ offset, span, offsetRow, spanRow }) => `
      grid-column: ${getOffset(offset, 1)} / span ${getIndex(span, 1)};
      grid-row: ${getOffset(offsetRow, 1)} / span ${getIndex(spanRow, 1)};
    `}
  }
  @media (min-width: ${({ sm }) => sm}rem) {
    ${({ offset, span, offsetRow, spanRow }) => `
      grid-column: ${getOffset(offset, 2)} / span ${getIndex(span, 2)};
      grid-row: ${getOffset(offsetRow, 2)} / span ${getIndex(spanRow, 2)};
    `}
  }
  @media (min-width: ${({ md }) => md}rem) {
    ${({ offset, span, offsetRow, spanRow }) => `
      grid-column: ${getOffset(offset, 3)} / span ${getIndex(span, 3)};
      grid-row: ${getOffset(offsetRow, 3)} / span ${getIndex(spanRow, 3)};
    `}
  }
  @media (min-width: ${({ lg }) => lg}rem) {
    ${({ offset, span, offsetRow, spanRow }) => `
      grid-column: ${getOffset(offset, 4)} / span ${getIndex(span, 4)};
      grid-row: ${getOffset(offsetRow, 4)} / span ${getIndex(spanRow, 4)};
    `}
  }
  @media (min-width: ${({ xlg }) => xlg}rem) {
    ${({ offset, span, offsetRow, spanRow }) => `
      grid-column: ${getOffset(offset, 5)} / span ${getIndex(span, 5)};
      grid-row: ${getOffset(offsetRow, 5)} / span ${getIndex(spanRow, 5)};
    `}
  }
`

Col.defaultProps = {
  span: [12],
  spanRow: [1],
  offset: ["auto"],
  offsetRow: ["auto"],
}

const Grid = forwardRef(GridContainer)

export { Grid, Col }
