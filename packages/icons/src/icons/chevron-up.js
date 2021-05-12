import React, { forwardRef } from "react"
import p from "prop-types"
export const ChevronUp = forwardRef(function ChevronUp(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 15L12 9L6 15"></path>
    </svg>
  )
})

ChevronUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ChevronUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ChevronUp.displayName = "ChevronUp"
