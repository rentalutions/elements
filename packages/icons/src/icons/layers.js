import React, { forwardRef } from "react"
import p from "prop-types"
export const Layers = forwardRef(function Layers(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
      <path d="M2 17L12 22L22 17"></path>
      <path d="M2 12L12 17L22 12"></path>
    </svg>
  )
})

Layers.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Layers.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Layers.displayName = "Layers"
