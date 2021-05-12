import React, { forwardRef } from "react"
import p from "prop-types"
export const Flag = forwardRef(function Flag(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z"></path>
      <path d="M4 22V15"></path>
    </svg>
  )
})

Flag.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Flag.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Flag.displayName = "Flag"
