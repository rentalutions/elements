import React, { forwardRef } from "react"
import p from "prop-types"
export const ChevronsLeft = forwardRef(function ChevronsLeft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 17 6 12 11 7M18 17 13 12 18 7"></path>
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
