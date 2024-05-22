import React, { forwardRef } from "react"
import p from "prop-types"
export const ShoppingBag = forwardRef(function ShoppingBag(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6 2 3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142 3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142 20.7893 21.0391 21 20.5304 21 20V6L18 2H6ZM3 6H21"></path>
      <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"></path>
    </svg>
  )
})

ShoppingBag.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ShoppingBag.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ShoppingBag.displayName = "ShoppingBag"
