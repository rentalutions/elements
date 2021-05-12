import React, { forwardRef } from "react"
import p from "prop-types"
export const ArrowLeft = forwardRef(function ArrowLeft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 12H5"></path>
      <path d="M12 19L5 12L12 5"></path>
    </svg>
  )
})

ArrowLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ArrowLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ArrowLeft.displayName = "ArrowLeft"
