import React, { forwardRef } from "react"
import p from "prop-types"
export const ZoomIn = forwardRef(function ZoomIn(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 19C15.4183 19 19 15.4183 19 11 19 6.58172 15.4183 3 11 3 6.58172 3 3 6.58172 3 11 3 15.4183 6.58172 19 11 19ZM21 21 16.65 16.65M11 8V14M8 11H14"></path>
    </svg>
  )
})

ZoomIn.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ZoomIn.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ZoomIn.displayName = "ZoomIn"
