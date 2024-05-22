import React, { forwardRef } from "react"
import p from "prop-types"
export const ShoppingCart = forwardRef(function ShoppingCart(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M9 22C9.55228 22 10 21.5523 10 21 10 20.4477 9.55228 20 9 20 8.44772 20 8 20.4477 8 21 8 21.5523 8.44772 22 9 22ZM20 22C20.5523 22 21 21.5523 21 21 21 20.4477 20.5523 20 20 20 19.4477 20 19 20.4477 19 21 19 21.5523 19.4477 22 20 22ZM1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583 8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583 21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"></path>
    </svg>
  )
})

ShoppingCart.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ShoppingCart.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ShoppingCart.displayName = "ShoppingCart"
