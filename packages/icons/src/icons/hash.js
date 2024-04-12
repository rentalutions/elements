import React, { forwardRef } from "react"
import p from "prop-types"
export const Hash = forwardRef(function Hash(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 9H20M4 15H20M10 3 8 21M16 3 14 21"></path>
    </svg>
  )
})

Hash.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Hash.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Hash.displayName = "Hash"
