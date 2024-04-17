import React, { forwardRef } from "react"
import p from "prop-types"
export const Shuffle = forwardRef(function Shuffle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 3H21V8M4 20 21 3M21 16V21H16M15 15 21 21M4 4 9 9"></path>
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
