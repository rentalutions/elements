import React, { forwardRef } from "react"
import p from "prop-types"
export const ArrowUp = forwardRef(function ArrowUp(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 19V5"></path>
      <path d="M5 12L12 5L19 12"></path>
    </svg>
  )
})

ArrowUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ArrowUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ArrowUp.displayName = "ArrowUp"
