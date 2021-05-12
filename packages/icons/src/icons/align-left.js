import React, { forwardRef } from "react"
import p from "prop-types"
export const AlignLeft = forwardRef(function AlignLeft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 10H3"></path>
      <path d="M21 6H3"></path>
      <path d="M21 14H3"></path>
      <path d="M17 18H3"></path>
    </svg>
  )
})

AlignLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

AlignLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

AlignLeft.displayName = "AlignLeft"
