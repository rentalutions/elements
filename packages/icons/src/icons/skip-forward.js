import React, { forwardRef } from "react"
import p from "prop-types"
export const SkipForward = forwardRef(function SkipForward(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5 4L15 12L5 20V4Z"></path>
      <path d="M19 5V19"></path>
    </svg>
  )
})

SkipForward.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

SkipForward.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

SkipForward.displayName = "SkipForward"
