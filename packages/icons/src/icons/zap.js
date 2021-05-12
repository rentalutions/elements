import React, { forwardRef } from "react"
import p from "prop-types"
export const Zap = forwardRef(function Zap(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"></path>
    </svg>
  )
})

Zap.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Zap.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Zap.displayName = "Zap"
