import React, { forwardRef } from "react"
import p from "prop-types"
export const Menu = forwardRef(function Menu(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 12H21"></path>
      <path d="M3 6H21"></path>
      <path d="M3 18H21"></path>
    </svg>
  )
})

Menu.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Menu.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Menu.displayName = "Menu"
