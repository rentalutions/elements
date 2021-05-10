import React, { forwardRef } from "react"
import p from "prop-types"
export const Bluetooth = forwardRef(function Bluetooth(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6.5 6.5L17.5 17.5L12 23V1L17.5 6.5L6.5 17.5"></path>
    </svg>
  )
})

Bluetooth.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Bluetooth.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Bluetooth.displayName = "Bluetooth"
