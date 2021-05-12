import React, { forwardRef } from "react"
import p from "prop-types"
export const MicOff = forwardRef(function MicOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M1 1L23 23"></path>
        <path d="M15 9.34V4C15.0007 3.25603 14.725 2.53832 14.2264 1.9862C13.7277 1.43408 13.0417 1.08694 12.3015 1.01217C11.5613 0.937406 10.8197 1.14034 10.2207 1.58159C9.62172 2.02283 9.20805 2.67091 9.06 3.4M9 9V12C9.00052 12.593 9.17675 13.1725 9.50643 13.6653C9.83611 14.1582 10.3045 14.5423 10.8523 14.7691C11.4002 14.996 12.0029 15.0554 12.5845 14.9399C13.1661 14.8243 13.7005 14.539 14.12 14.12L9 9Z"></path>
        <path d="M17 16.95C16.0238 17.9464 14.7721 18.6285 13.4056 18.9086C12.0391 19.1887 10.62 19.0542 9.3305 18.5223C8.04096 17.9903 6.93976 17.0853 6.16817 15.9232C5.39658 14.761 4.9898 13.3949 5 12V10M19 10V12C18.9996 12.4124 18.9628 12.824 18.89 13.23"></path>
        <path d="M12 19V23"></path>
        <path d="M8 23H16"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24"></rect>
        </clippath>
      </defs>
    </svg>
  )
})

MicOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

MicOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

MicOff.displayName = "MicOff"
