import React, { forwardRef } from "react"
import p from "prop-types"
export const Sunrise = forwardRef(function Sunrise(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 18C17 16.6739 16.4732 15.4021 15.5355 14.4645C14.5979 13.5268 13.3261 13 12 13C10.6739 13 9.40215 13.5268 8.46447 14.4645C7.52678 15.4021 7 16.6739 7 18"></path>
      <path d="M12 2V9"></path>
      <path d="M4.22 10.22L5.64 11.64"></path>
      <path d="M1 18H3"></path>
      <path d="M21 18H23"></path>
      <path d="M18.36 11.64L19.78 10.22"></path>
      <path d="M23 22H1"></path>
      <path d="M8 6L12 2L16 6"></path>
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
