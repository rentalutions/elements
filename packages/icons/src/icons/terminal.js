import React, { forwardRef } from "react"
import p from "prop-types"
export const Terminal = forwardRef(function Terminal(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 17L10 11L4 5"></path>
      <path d="M12 19H20"></path>
    </svg>
  )
})

Terminal.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Terminal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Terminal.displayName = "Terminal"
