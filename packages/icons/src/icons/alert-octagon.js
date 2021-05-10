import React, { forwardRef } from "react"
import p from "prop-types"
export const AlertOctagon = forwardRef(function AlertOctagon(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z"></path>
        <path d="M12 16H12.01"></path>
        <path d="M12 8V12"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24"></rect>
        </clippath>
      </defs>
    </svg>
  )
})
AlertOctagon.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}
AlertOctagon.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}
AlertOctagon.displayName = "AlertOctagon"
