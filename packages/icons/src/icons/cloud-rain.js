import React, { forwardRef } from "react"
import p from "prop-types"
export const CloudRain = forwardRef(function CloudRain(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M16 13V21"></path>
        <path d="M8 13V21"></path>
        <path d="M12 15V23"></path>
        <path d="M20 16.58C21.0512 16.1196 21.9121 15.3116 22.4381 14.2916C22.9641 13.2715 23.1231 12.1016 22.8886 10.9782C22.6541 9.85478 22.0402 8.84623 21.15 8.12185C20.2599 7.39748 19.1476 7.00137 18 7.00002H16.74C16.423 5.77254 15.8189 4.63797 14.9773 3.68982C14.1358 2.74167 13.0809 2.00709 11.8998 1.54664C10.7186 1.08619 9.44491 0.913035 8.18368 1.04146C6.92246 1.16989 5.70981 1.59622 4.6457 2.2853C3.58158 2.97439 2.69647 3.9065 2.06331 5.00482C1.43015 6.10313 1.06708 7.33619 1.00401 8.60237C0.940954 9.86855 1.17971 11.1316 1.70061 12.2874C2.2215 13.4432 3.00962 14.4586 4 15.25"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24"></rect>
        </clippath>
      </defs>
    </svg>
  )
})

CloudRain.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CloudRain.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CloudRain.displayName = "CloudRain"
