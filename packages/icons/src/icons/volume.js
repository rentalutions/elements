import React, { forwardRef } from "react"
import p from "prop-types"
export const Volume = forwardRef(function Volume(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 5L6 9H2V15H6L11 19V5Z"></path>
    </svg>
  )
})

Volume.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Volume.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Volume.displayName = "Volume"
