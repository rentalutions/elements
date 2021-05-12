import React, { forwardRef } from "react"
import p from "prop-types"
export const ArrowDown = forwardRef(function ArrowDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 5V19"></path>
      <path d="M19 12L12 19L5 12"></path>
    </svg>
  )
})

ArrowDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ArrowDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ArrowDown.displayName = "ArrowDown"
