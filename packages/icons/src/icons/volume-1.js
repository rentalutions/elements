import React, { forwardRef } from "react"
import p from "prop-types"
export const Volume1 = forwardRef(function Volume1(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 5L6 9H2V15H6L11 19V5Z"></path>
      <path d="M15.54 8.45999C16.4774 9.39763 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53"></path>
    </svg>
  )
})

Volume1.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Volume1.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Volume1.displayName = "Volume1"
