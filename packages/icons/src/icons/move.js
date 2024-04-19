import React, { forwardRef } from "react"
import p from "prop-types"
export const Move = forwardRef(function Move(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5 9 2 12 5 15M9 5 12 2 15 5M15 19 12 22 9 19M19 9 22 12 19 15M2 12H22M12 2V22"></path>
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
