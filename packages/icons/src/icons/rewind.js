import React, { forwardRef } from "react"
import p from "prop-types"
export const Rewind = forwardRef(function Rewind(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 19L2 12L11 5V19Z"></path>
      <path d="M22 19L13 12L22 5V19Z"></path>
    </svg>
  )
})

Rewind.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Rewind.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Rewind.displayName = "Rewind"
