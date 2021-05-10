import React, { forwardRef } from "react"
import p from "prop-types"
export const Type = forwardRef(function Type(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 7V4H20V7"></path>
      <path d="M9 20H15"></path>
      <path d="M12 4V20"></path>
    </svg>
  )
})

Type.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Type.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Type.displayName = "Type"
