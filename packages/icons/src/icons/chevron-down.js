import React, { forwardRef } from "react"
import p from "prop-types"
export const ChevronDown = forwardRef(function ChevronDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6 9L12 15L18 9"></path>
    </svg>
  )
})

ChevronDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ChevronDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ChevronDown.displayName = "ChevronDown"
