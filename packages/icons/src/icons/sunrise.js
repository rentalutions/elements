import React, { forwardRef } from "react"
import p from "prop-types"
export const Sunrise = forwardRef(function Sunrise(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 18C17 16.6739 16.4732 15.4021 15.5355 14.4645 14.5979 13.5268 13.3261 13 12 13 10.6739 13 9.40215 13.5268 8.46447 14.4645 7.52678 15.4021 7 16.6739 7 18M12 2V9M4.22 10.22 5.64 11.64M1 18H3M21 18H23M18.36 11.64 19.78 10.22M23 22H1M8 6 12 2 16 6"></path>
    </svg>
  )
})

Sunrise.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Sunrise.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Sunrise.displayName = "Sunrise"
