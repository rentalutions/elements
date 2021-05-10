import React, { forwardRef } from "react"
import p from "prop-types"
export const ArrowUpRight = forwardRef(function ArrowUpRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 17L17 7"></path>
      <path d="M7 7H17V17"></path>
    </svg>
  )
})

ArrowUpRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ArrowUpRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ArrowUpRight.displayName = "ArrowUpRight"
