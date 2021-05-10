import React, { forwardRef } from "react"
import p from "prop-types"
export const Bold = forwardRef(function Bold(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6 4H14C15.0609 4 16.0783 4.42143 16.8284 5.17157C17.5786 5.92172 18 6.93913 18 8C18 9.06087 17.5786 10.0783 16.8284 10.8284C16.0783 11.5786 15.0609 12 14 12H6V4Z"></path>
      <path d="M6 12H15C16.0609 12 17.0783 12.4214 17.8284 13.1716C18.5786 13.9217 19 14.9391 19 16C19 17.0609 18.5786 18.0783 17.8284 18.8284C17.0783 19.5786 16.0609 20 15 20H6V12Z"></path>
    </svg>
  )
})

Bold.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Bold.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Bold.displayName = "Bold"
