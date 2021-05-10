import React, { forwardRef } from "react"
import p from "prop-types"
export const Octagon = forwardRef(function Octagon(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z"></path>
    </svg>
  )
})

Octagon.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Octagon.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Octagon.displayName = "Octagon"
