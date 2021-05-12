import React, { forwardRef } from "react"
import p from "prop-types"
export const Crop = forwardRef(function Crop(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6.13 1L6 16C6 16.5304 6.21071 17.0391 6.58579 17.4142C6.96086 17.7893 7.46957 18 8 18H23"></path>
      <path d="M1 6.13L16 6C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V23"></path>
    </svg>
  )
})

Crop.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Crop.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Crop.displayName = "Crop"
