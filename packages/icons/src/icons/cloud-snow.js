import React, { forwardRef } from "react"
import p from "prop-types"
export const CloudSnow = forwardRef(function CloudSnow(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M20 17.58C21.0512 17.1196 21.9121 16.3116 22.4381 15.2916C22.9641 14.2715 23.1231 13.1016 22.8886 11.9782C22.6541 10.8548 22.0402 9.84623 21.15 9.12185C20.2599 8.39748 19.1476 8.00137 18 8.00002H16.74C16.423 6.77254 15.8189 5.63797 14.9773 4.68982C14.1358 3.74167 13.0809 3.00709 11.8998 2.54664C10.7186 2.08618 9.44491 1.91304 8.18368 2.04146C6.92246 2.16989 5.70981 2.59622 4.6457 3.2853C3.58158 3.97439 2.69647 4.9065 2.06331 6.00482C1.43015 7.10313 1.06708 8.33619 1.00401 9.60237C0.940954 10.8685 1.17971 12.1316 1.70061 13.2874C2.2215 14.4432 3.00962 15.4586 4 16.25"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24"></rect>
        </clippath>
      </defs>
    </svg>
  )
})

CloudSnow.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CloudSnow.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CloudSnow.displayName = "CloudSnow"
