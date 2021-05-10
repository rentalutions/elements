import React, { forwardRef } from "react"
import p from "prop-types"
export const Navigation = forwardRef(function Navigation(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 11L22 2L13 21L11 13L3 11Z"></path>
    </svg>
  )
})

Navigation.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Navigation.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Navigation.displayName = "Navigation"
