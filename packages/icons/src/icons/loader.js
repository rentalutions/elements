import React, { forwardRef } from "react"
import p from "prop-types"
export const Loader = forwardRef(function Loader(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 2V6"></path>
      <path d="M12 18V22"></path>
      <path d="M4.93 4.92999L7.76 7.75999"></path>
      <path d="M16.24 16.24L19.07 19.07"></path>
      <path d="M2 12H6"></path>
      <path d="M18 12H22"></path>
      <path d="M4.93 19.07L7.76 16.24"></path>
      <path d="M16.24 7.75999L19.07 4.92999"></path>
    </svg>
  )
})

Loader.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Loader.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Loader.displayName = "Loader"
