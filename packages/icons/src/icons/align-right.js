import React, { forwardRef } from "react"
import p from "prop-types"
export const AlignRight = forwardRef(function AlignRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 10H7"></path>
      <path d="M21 6H3"></path>
      <path d="M21 14H3"></path>
      <path d="M21 18H7"></path>
    </svg>
  )
})

AlignRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

AlignRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

AlignRight.displayName = "AlignRight"
