import React, { forwardRef } from "react"
import p from "prop-types"
export const BatteryCharging = forwardRef(function BatteryCharging(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6.19M15 6H17C17.5304 6 18.0391 6.21071 18.4142 6.58579C18.7893 6.96086 19 7.46957 19 8V16C19 16.5304 18.7893 17.0391 18.4142 17.4142C18.0391 17.7893 17.5304 18 17 18H13.81"></path>
      <path d="M23 13V11"></path>
      <path d="M11 6L7 12H13L9 18"></path>
    </svg>
  )
})

BatteryCharging.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

BatteryCharging.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

BatteryCharging.displayName = "BatteryCharging"
