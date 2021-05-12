import React, { forwardRef } from "react"
import p from "prop-types"
export const Codepen = forwardRef(function Codepen(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"></path>
      <path d="M12 22V15.5"></path>
      <path d="M22 8.5L12 15.5L2 8.5"></path>
      <path d="M2 15.5L12 8.5L22 15.5"></path>
      <path d="M12 2V8.5"></path>
    </svg>
  )
})

Codepen.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Codepen.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Codepen.displayName = "Codepen"
