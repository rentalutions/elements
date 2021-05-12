import React, { forwardRef } from "react"
import p from "prop-types"
export const ArrowUpCircle = forwardRef(function ArrowUpCircle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
      <path d="M16 12L12 8L8 12"></path>
      <path d="M12 16V8"></path>
    </svg>
  )
})

ArrowUpCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ArrowUpCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ArrowUpCircle.displayName = "ArrowUpCircle"
