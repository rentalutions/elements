import React, { forwardRef } from "react"
import p from "prop-types"
export const HardDrive = forwardRef(function HardDrive(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M22 12H2M5.45 5.11 2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142 2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142 21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028 17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028 5.87083 4.49637 5.61558 4.77679 5.45 5.11V5.11Z"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <path d="M0 0H24V24H0z"></path>
        </clippath>
      </defs>
    </svg>
  )
})

HardDrive.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

HardDrive.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

HardDrive.displayName = "HardDrive"
