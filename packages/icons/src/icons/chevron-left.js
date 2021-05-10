import React, { forwardRef } from "react"
import p from "prop-types"
export const ChevronLeft = forwardRef(function ChevronLeft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M15 18L9 12L15 6"></path>
    </svg>
  )
})

ChevronLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ChevronLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ChevronLeft.displayName = "ChevronLeft"
