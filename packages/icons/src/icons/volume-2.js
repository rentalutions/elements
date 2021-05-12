import React, { forwardRef } from "react"
import p from "prop-types"
export const Volume2 = forwardRef(function Volume2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 5L6 9H2V15H6L11 19V5Z"></path>
      <path d="M19.07 4.92999C20.9447 6.80527 21.9979 9.34835 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07M15.54 8.45999C16.4774 9.39763 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53"></path>
    </svg>
  )
})

Volume2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Volume2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Volume2.displayName = "Volume2"
