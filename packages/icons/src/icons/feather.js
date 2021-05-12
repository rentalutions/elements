import React, { forwardRef } from "react"
import p from "prop-types"
export const Feather = forwardRef(function Feather(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M20.24 12.24C21.3658 11.1141 21.9983 9.58716 21.9983 7.99497C21.9983 6.40279 21.3658 4.87582 20.24 3.74997C19.1142 2.62413 17.5872 1.99164 15.995 1.99164C14.4028 1.99164 12.8758 2.62413 11.75 3.74997L5 10.5V19H13.5L20.24 12.24Z"></path>
      <path d="M16 8L2 22"></path>
      <path d="M17.5 15H9"></path>
    </svg>
  )
})

Feather.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Feather.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Feather.displayName = "Feather"
