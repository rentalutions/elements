import React, { forwardRef } from "react"
import p from "prop-types"
export const Aperture = forwardRef(function Aperture(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
      <path d="M14.31 8L20.05 17.94"></path>
      <path d="M9.69 8H21.17"></path>
      <path d="M7.38 12.0001L13.12 2.06006"></path>
      <path d="M9.69001 16L3.95001 6.06"></path>
      <path d="M14.31 16H2.82999"></path>
      <path d="M16.62 12L10.88 21.94"></path>
    </svg>
  )
})

Aperture.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Aperture.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Aperture.displayName = "Aperture"
