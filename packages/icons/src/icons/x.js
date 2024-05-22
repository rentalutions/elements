import React, { forwardRef } from "react"
import p from "prop-types"
export const X = forwardRef(function X(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 6 6 18M6 6 18 18"></path>
    </svg>
  )
})

X.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

X.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

X.displayName = "X"
