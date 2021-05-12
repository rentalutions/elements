import React, { forwardRef } from "react"
import p from "prop-types"
export const Italic = forwardRef(function Italic(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 4H10"></path>
      <path d="M14 20H5"></path>
      <path d="M15 4L9 20"></path>
    </svg>
  )
})

Italic.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Italic.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Italic.displayName = "Italic"
