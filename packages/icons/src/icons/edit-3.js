import React, { forwardRef } from "react"
import p from "prop-types"
export const Edit3 = forwardRef(function Edit3(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M14 2L18 6L7 17H3V13L14 2Z"></path>
      <path d="M3 22H21"></path>
    </svg>
  )
})

Edit3.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Edit3.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Edit3.displayName = "Edit3"
