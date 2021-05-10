import React, { forwardRef } from "react"
import p from "prop-types"
export const Sliders = forwardRef(function Sliders(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 21V14"></path>
      <path d="M4 10V3"></path>
      <path d="M12 21V12"></path>
      <path d="M12 8V3"></path>
      <path d="M20 21V16"></path>
      <path d="M20 12V3"></path>
      <path d="M1 14H7"></path>
      <path d="M9 8H15"></path>
      <path d="M17 16H23"></path>
    </svg>
  )
})

Sliders.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Sliders.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Sliders.displayName = "Sliders"
