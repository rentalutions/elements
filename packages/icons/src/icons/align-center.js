import React, { forwardRef } from "react"
import p from "prop-types"
export const AlignCenter = forwardRef(function AlignCenter(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 10H6"></path>
      <path d="M21 6H3"></path>
      <path d="M21 14H3"></path>
      <path d="M18 18H6"></path>
    </svg>
  )
})

AlignCenter.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

AlignCenter.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

AlignCenter.displayName = "AlignCenter"
