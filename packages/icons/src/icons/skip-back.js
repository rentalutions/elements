import React, { forwardRef } from "react"
import p from "prop-types"
export const SkipBack = forwardRef(function SkipBack(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 20L9 12L19 4V20Z"></path>
      <path d="M5 19V5"></path>
    </svg>
  )
})

SkipBack.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

SkipBack.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

SkipBack.displayName = "SkipBack"
