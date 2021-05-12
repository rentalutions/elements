import React, { forwardRef } from "react"
import p from "prop-types"
export const ShieldOff = forwardRef(function ShieldOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19.69 14C19.8911 13.3522 19.9955 12.6783 20 12V5L12 2L8.84 3.18"></path>
      <path d="M4.73 4.73L4 5V12C4 18 12 22 12 22C14.117 20.8829 16.0197 19.4001 17.62 17.62"></path>
      <path d="M1 1L23 23"></path>
    </svg>
  )
})

ShieldOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ShieldOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ShieldOff.displayName = "ShieldOff"
