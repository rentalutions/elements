import React, { forwardRef } from "react"
import p from "prop-types"
export const Monitor = forwardRef(function Monitor(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z"></path>
      <path d="M8 21H16"></path>
      <path d="M12 17V21"></path>
    </svg>
  )
})

Monitor.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Monitor.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Monitor.displayName = "Monitor"
