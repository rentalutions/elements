import React, { forwardRef } from "react"
import p from "prop-types"
export const Activity = forwardRef(function Activity(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M22 12H18L15 21L9 3L6 12H2"></path>
    </svg>
  )
})

Activity.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Activity.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Activity.displayName = "Activity"
