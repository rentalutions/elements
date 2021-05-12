import React, { forwardRef } from "react"
import p from "prop-types"
export const Shuffle = forwardRef(function Shuffle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 3H21V8"></path>
      <path d="M4 20L21 3"></path>
      <path d="M21 16V21H16"></path>
      <path d="M15 15L21 21"></path>
      <path d="M4 4L9 9"></path>
    </svg>
  )
})

Shuffle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Shuffle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Shuffle.displayName = "Shuffle"
