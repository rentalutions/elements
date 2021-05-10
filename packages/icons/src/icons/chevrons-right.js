import React, { forwardRef } from "react"
import p from "prop-types"
export const ChevronsRight = forwardRef(function ChevronsRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M13 17L18 12L13 7"></path>
      <path d="M6 17L11 12L6 7"></path>
    </svg>
  )
})

ChevronsRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ChevronsRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ChevronsRight.displayName = "ChevronsRight"
