import React, { forwardRef } from "react"
import p from "prop-types"
export const ArrowDownRight = forwardRef(function ArrowDownRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 7L17 17"></path>
      <path d="M17 7V17H7"></path>
    </svg>
  )
})

ArrowDownRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ArrowDownRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ArrowDownRight.displayName = "ArrowDownRight"
