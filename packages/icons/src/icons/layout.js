import React, { forwardRef } from "react"
import p from "prop-types"
export const Layout = forwardRef(function Layout(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"></path>
      <path d="M3 9H21"></path>
      <path d="M9 21V9"></path>
    </svg>
  )
})

Layout.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Layout.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Layout.displayName = "Layout"
