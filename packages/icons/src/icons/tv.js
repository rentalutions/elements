import React, { forwardRef } from "react"
import p from "prop-types"
export const Tv = forwardRef(function Tv(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M20 7H4C2.89543 7 2 7.89543 2 9V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V9C22 7.89543 21.1046 7 20 7Z"></path>
      <path d="M17 2L12 7L7 2"></path>
    </svg>
  )
})

Tv.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Tv.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Tv.displayName = "Tv"
