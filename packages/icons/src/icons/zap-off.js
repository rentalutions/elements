import React, { forwardRef } from "react"
import p from "prop-types"
export const ZapOff = forwardRef(function ZapOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12.41 6.75L13 2L10.57 4.92"></path>
      <path d="M18.57 12.91L21 10H15.66"></path>
      <path d="M8 8L3 14H12L11 22L16 16"></path>
      <path d="M1 1L23 23"></path>
    </svg>
  )
})

ZapOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ZapOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ZapOff.displayName = "ZapOff"
