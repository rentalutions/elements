import React, { forwardRef } from "react"
import p from "prop-types"
export const ChevronsUp = forwardRef(function ChevronsUp(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 11L12 6L7 11"></path>
      <path d="M17 18L12 13L7 18"></path>
    </svg>
  )
})

ChevronsUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ChevronsUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ChevronsUp.displayName = "ChevronsUp"
