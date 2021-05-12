import React, { forwardRef } from "react"
import p from "prop-types"
export const ChevronsLeft = forwardRef(function ChevronsLeft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 17L6 12L11 7"></path>
      <path d="M18 17L13 12L18 7"></path>
    </svg>
  )
})

ChevronsLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ChevronsLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ChevronsLeft.displayName = "ChevronsLeft"
