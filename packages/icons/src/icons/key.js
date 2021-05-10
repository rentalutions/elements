import React, { forwardRef } from "react"
import p from "prop-types"
export const Key = forwardRef(function Key(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 2L19 4M11.3891 11.6109C12.3844 12.6062 13 13.9812 13 15.5C13 18.5376 10.5376 21 7.5 21C4.46244 21 2 18.5376 2 15.5C2 12.4624 4.46244 10 7.5 10C9.01878 10 10.3938 10.6156 11.3891 11.6109ZM11.3891 11.6109L15.5 7.5M15.5 7.5L18.5 10.5L22 6.99999L19 4M15.5 7.5L19 4"></path>
    </svg>
  )
})

Key.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Key.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Key.displayName = "Key"
