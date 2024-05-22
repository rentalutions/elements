import React, { forwardRef } from "react"
import p from "prop-types"
export const CloudOff = forwardRef(function CloudOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M22.61 16.95C22.9322 16.1893 23.0609 15.3606 22.9845 14.5381 22.9082 13.7155 22.6293 12.9246 22.1726 12.2362 21.716 11.5478 21.0959 10.9832 20.3677 10.593 19.6396 10.2027 18.8261 9.99902 18 10H16.74C16.3318 8.39249 15.4341 6.95158 14.171 5.87666 12.908 4.80173 11.3421 4.14593 9.68999 4M4.99999 5C3.43807 5.86364 2.2098 7.22478 1.51058 8.86691.811359 10.509.681344 12.3378 1.14122 14.0623 1.60109 15.7869 2.62444 17.3081 4.04847 18.384 5.47251 19.4599 7.21543 20.0288 8.99999 20H18C18.5798 19.9993 19.155 19.8978 19.7 19.7M1 1 23 23"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <path d="M0 0H24V24H0z"></path>
        </clippath>
      </defs>
    </svg>
  )
})

CloudOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CloudOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CloudOff.displayName = "CloudOff"
