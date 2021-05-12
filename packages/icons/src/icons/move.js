import React, { forwardRef } from "react"
import p from "prop-types"
export const Move = forwardRef(function Move(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5 9L2 12L5 15"></path>
      <path d="M9 5L12 2L15 5"></path>
      <path d="M15 19L12 22L9 19"></path>
      <path d="M19 9L22 12L19 15"></path>
      <path d="M2 12H22"></path>
      <path d="M12 2V22"></path>
    </svg>
  )
})

Move.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Move.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Move.displayName = "Move"
