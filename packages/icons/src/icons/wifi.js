import React, { forwardRef } from "react"
import p from "prop-types"
export const Wifi = forwardRef(function Wifi(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M5 12.55C6.97656 10.9037 9.46761 10.0021 12.04 10.0021C14.6124 10.0021 17.1034 10.9037 19.08 12.55"></path>
        <path d="M1.42001 9.00001C4.34244 6.42397 8.10431 5.00266 12 5.00266C15.8957 5.00266 19.6576 6.42397 22.58 9.00001"></path>
        <path d="M8.53 16.11C9.5452 15.3887 10.7597 15.0013 12.005 15.0013C13.2503 15.0013 14.4648 15.3887 15.48 16.11"></path>
        <path d="M12 20H12.01"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24"></rect>
        </clippath>
      </defs>
    </svg>
  )
})

Wifi.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Wifi.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Wifi.displayName = "Wifi"
