import React, { forwardRef } from "react"
import p from "prop-types"
export const Underline = forwardRef(function Underline(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6 3V10C6 11.5913 6.63214 13.1174 7.75736 14.2426C8.88258 15.3679 10.4087 16 12 16C13.5913 16 15.1174 15.3679 16.2426 14.2426C17.3679 13.1174 18 11.5913 18 10V3"></path>
      <path d="M4 21H20"></path>
    </svg>
  )
})

Underline.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Underline.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Underline.displayName = "Underline"
