import React, { forwardRef } from "react"
import p from "prop-types"
export const Code = forwardRef(function Code(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 18L22 12L16 6"></path>
      <path d="M8 6L2 12L8 18"></path>
    </svg>
  )
})

Code.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Code.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Code.displayName = "Code"
