import React, { forwardRef } from "react"
import p from "prop-types"
export const VolumeX = forwardRef(function VolumeX(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 5 6 9H2V15H6L11 19V5ZM23 9 17 15M17 9 23 15"></path>
    </svg>
  )
})

VolumeX.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

VolumeX.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

VolumeX.displayName = "VolumeX"
