import React, { forwardRef } from "react"
import p from "prop-types"
export const WifiOff = forwardRef(function WifiOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M1 1L23 23"></path>
        <path d="M16.72 11.06C17.5391 11.4597 18.305 11.9603 19 12.55"></path>
        <path d="M5 12.55C6.48208 11.3108 8.26587 10.4862 10.17 10.16"></path>
        <path d="M10.71 5.05001C12.8524 4.87738 15.0076 5.13818 17.047 5.81683C19.0864 6.49549 20.9682 7.57809 22.58 9.00001"></path>
        <path d="M1.42001 9C2.80718 7.77385 4.39771 6.79922 6.12001 6.12"></path>
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

WifiOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

WifiOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

WifiOff.displayName = "WifiOff"
