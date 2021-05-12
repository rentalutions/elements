import React, { forwardRef } from "react"
import p from "prop-types"
export const Plus = forwardRef(function Plus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 5V19"></path>
      <path d="M5 12H19"></path>
    </svg>
  )
})

Plus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Plus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Plus.displayName = "Plus"
