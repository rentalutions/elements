import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export const Grid = ({
  children,
  xsmBreak = "40rem",
  smBreak = "60rem",
  mdBreak = "80rem",
  lgBreak = "100rem",
  xlgBreak = "120rem",
  ...props
}) => {
  const renderChildren = () =>
    React.Children.map(children, child =>
      React.cloneElement(child, {
        xsmBreak,
        smBreak,
        mdBreak,
        lgBreak,
        xlgBreak
      })
    )
  return <StyledGrid {...props}>{renderChildren()}</StyledGrid>
}

export const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: ${({ gap }) => gap};
`

Grid.propTypes = {
  columns: PropTypes.number,
  gap: PropTypes.string,
  xsmBreak: PropTypes.string,
  smBreak: PropTypes.string,
  mdBreak: PropTypes.string,
  lgBreak: PropTypes.string,
  xlgBreak: PropTypes.string,
  children: PropTypes.node.isRequired
}

Grid.defaultProps = {
  xsmBreak: "40rem",
  smBreak: "60rem",
  mdBreak: "80rem",
  lgBreak: "100rem",
  xlgBreak: "120rem",
  gap: "2rem",
  columns: 12
}

function getIndex(arr, index) {
  return arr[index] ? arr[index] : arr[arr.length - 1]
}

function getOffset(offset, index) {
  const start = getIndex(offset, index)
  return start === "auto" ? "auto" : start + 1
}

export const Col = styled.div`
  grid-column: ${({ offset }) => `${getOffset(offset, 0)} /`} span
    ${({ span }) => getIndex(span, 0)};
  grid-row: ${({ offsetRow }) => `${getOffset(offsetRow, 0)} /`} span
    ${({ spanRow }) => getIndex(spanRow, 0)};
  @media (min-width: ${({ xsmBreak }) => xsmBreak}) {
    grid-column: ${({ offset }) => `${getOffset(offset, 1)} /`} span
      ${({ span }) => getIndex(span, 1)};
    grid-row: ${({ offsetRow }) => `${getOffset(offsetRow, 1)} /`} span
      ${({ spanRow }) => getIndex(spanRow, 1)};
  }
  @media (min-width: ${({ smBreak }) => smBreak}) {
    grid-column: ${({ offset }) => `${getOffset(offset, 2)} /`} span
      ${({ span }) => getIndex(span, 2)};
    grid-row: ${({ offsetRow }) => `${getOffset(offsetRow, 2)} /`} span
      ${({ spanRow }) => getIndex(spanRow, 2)};
  }
  @media (min-width: ${({ mdBreak }) => mdBreak}) {
    grid-column: ${({ offset }) => `${getOffset(offset, 3)} /`} span
      ${({ span }) => getIndex(span, 3)};
    grid-row: ${({ offsetRow }) => `${getOffset(offsetRow, 3)} /`} span
      ${({ spanRow }) => getIndex(spanRow, 3)};
  }
  @media (min-width: ${({ lgBreak }) => lgBreak}) {
    grid-column: ${({ offset }) => `${getOffset(offset, 4)} /`} span
      ${({ span }) => getIndex(span, 4)};
    grid-row: ${({ offsetRow }) => `${getOffset(offsetRow, 4)} /`} span
      ${({ spanRow }) => getIndex(spanRow, 4)};
  }
  @media (min-width: ${({ xlgBreak }) => xlgBreak}) {
    grid-column: ${({ offset }) => `${getOffset(offset, 5)} /`} span
      ${({ span }) => getIndex(span, 5)};
    grid-row: ${({ offsetRow }) => `${getOffset(offsetRow, 5)} /`} span
      ${({ spanRow }) => getIndex(spanRow, 5)};
  }
`

Col.defaultProps = {
  span: [12],
  spanRow: [1],
  offset: ["auto"],
  offsetRow: ["auto"]
}

Col.propTypes = {
  span: PropTypes.arrayOf(PropTypes.number),
  spanRow: PropTypes.arrayOf(PropTypes.number),
  offset: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  offsetRow: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
}
