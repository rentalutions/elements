import React, { forwardRef } from "react"
import p from "prop-types"
export const Scissors = forwardRef(function Scissors(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6 9C7.65685 9 9 7.65685 9 6 9 4.34315 7.65685 3 6 3 4.34315 3 3 4.34315 3 6 3 7.65685 4.34315 9 6 9ZM6 21C7.65685 21 9 19.6569 9 18 9 16.3431 7.65685 15 6 15 4.34315 15 3 16.3431 3 18 3 19.6569 4.34315 21 6 21ZM20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12"></path>
    </svg>
  )
})

Scissors.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Scissors.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Scissors.displayName = "Scissors"
