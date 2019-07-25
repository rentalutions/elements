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
  grid-template-columns: repeat(${({ columns = 12 }) => columns}, 1fr);
  grid-gap: ${({ gap = 2 }) => gap}rem;
`

StyledGrid.propTypes = {
  columns: PropTypes.number,
  gap: PropTypes.number
}

export const Col = styled.div`
  grid-column: ${({ offset }) => `${getColumns(offset, 0)} /`} span
    ${({ span }) => getColumns(span, 0)};
  @media (min-width: ${({ xsmBreak }) => xsmBreak}) {
    grid-column: ${({ offset }) => `${getColumns(offset, 1)} /`} span
      ${({ span }) => getColumns(span, 1)};
  }
  @media (min-width: ${({ smBreak }) => smBreak}) {
    grid-column: ${({ offset }) => `${getColumns(offset, 2)} /`} span
      ${({ span }) => getColumns(span, 2)};
  }
  @media (min-width: ${({ mdBreak }) => mdBreak}) {
    grid-column: ${({ offset }) => `${getColumns(offset, 3)} /`} span
      ${({ span }) => getColumns(span, 3)};
  }
  @media (min-width: ${({ lgBreak }) => lgBreak}) {
    grid-column: ${({ offset }) => `${getColumns(offset, 4)} /`} span
      ${({ span }) => getColumns(span, 4)};
  }
  @media (min-width: ${({ xlgBreak }) => xlgBreak}) {
    grid-column: ${({ offset }) => `${getColumns(offset, 5)} /`} span
      ${({ span }) => getColumns(span, 5)};
  }
`

Col.defaultProps = {
  span: [12],
  offset: ["auto"]
}

Col.propTypes = {
  span: PropTypes.arrayOf(PropTypes.number),
  offset: PropTypes.array
}

function getColumns(columnArray, index) {
  return columnArray[index] ? columnArray[index] : columnArray[columnArray.length - 1]
}
