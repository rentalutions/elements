import React, { forwardRef } from "react"
import p from "prop-types"
export const ZapOff = forwardRef(function ZapOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12.41 6.75 13 2 10.57 4.92M18.57 12.91 21 10H15.66M8 8 3 14H12L11 22 16 16M1 1 23 23"></path>
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
