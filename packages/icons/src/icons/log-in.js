import React, { forwardRef } from "react"
import p from "prop-types"
export const LogIn = forwardRef(function LogIn(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"></path>
      <path d="M10 17L15 12L10 7"></path>
      <path d="M15 12H3"></path>
    </svg>
  )
})

LogIn.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

LogIn.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

LogIn.displayName = "LogIn"
