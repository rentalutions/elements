import React, { forwardRef } from "react"
import p from "prop-types"
export const Battery = forwardRef(function Battery(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 6H3C1.89543 6 1 6.89543 1 8V16C1 17.1046 1.89543 18 3 18H17C18.1046 18 19 17.1046 19 16V8C19 6.89543 18.1046 6 17 6Z"></path>
      <path d="M23 13V11"></path>
    </svg>
  )
})

Battery.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Battery.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Battery.displayName = "Battery"
