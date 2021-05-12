import React, { forwardRef } from "react"
import p from "prop-types"
export const FastForward = forwardRef(function FastForward(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M13 19L22 12L13 5V19Z"></path>
      <path d="M2 19L11 12L2 5V19Z"></path>
    </svg>
  )
})

FastForward.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

FastForward.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

FastForward.displayName = "FastForward"
