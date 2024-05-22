import React, { forwardRef } from "react"
import p from "prop-types"
export const XCircle = forwardRef(function XCircle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12 22 6.47715 17.5228 2 12 2 6.47715 2 2 6.47715 2 12 2 17.5228 6.47715 22 12 22ZM15 9 9 15M9 9 15 15"></path>
    </svg>
  )
})

XCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

XCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

XCircle.displayName = "XCircle"
