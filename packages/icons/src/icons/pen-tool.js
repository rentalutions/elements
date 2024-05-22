import React, { forwardRef } from "react"
import p from "prop-types"
export const PenTool = forwardRef(function PenTool(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 19L19 12L22 15L15 22L12 19Z"></path>
      <path d="M18 13 16.5 5.5 2 2 5.5 16.5 13 18 18 13ZM2 2 9.58579 9.58579"></path>
      <circle cx="11" cy="11" r="2"></circle>
    </svg>
  )
})

PenTool.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

PenTool.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

PenTool.displayName = "PenTool"
