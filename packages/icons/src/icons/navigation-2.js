import React, { forwardRef } from "react"
import p from "prop-types"
export const Navigation2 = forwardRef(function Navigation2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 2L19 21L12 17L5 21L12 2Z"></path>
    </svg>
  )
})

Navigation2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Navigation2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Navigation2.displayName = "Navigation2"
