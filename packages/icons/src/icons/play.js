import React, { forwardRef } from "react"
import p from "prop-types"
export const Play = forwardRef(function Play(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5 3L19 12L5 21V3Z"></path>
    </svg>
  )
})

Play.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Play.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Play.displayName = "Play"
