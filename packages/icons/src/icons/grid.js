import React, { forwardRef } from "react"
import p from "prop-types"
export const Grid = forwardRef(function Grid(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10 3H3V10H10V3Z"></path>
      <path d="M21 3H14V10H21V3Z"></path>
      <path d="M21 14H14V21H21V14Z"></path>
      <path d="M10 14H3V21H10V14Z"></path>
    </svg>
  )
})

Grid.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Grid.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Grid.displayName = "Grid"
