import React, { forwardRef } from "react"
import p from "prop-types"
export const LogOut = forwardRef(function LogOut(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"></path>
      <path d="M16 17L21 12L16 7"></path>
      <path d="M21 12H9"></path>
    </svg>
  )
})

LogOut.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

LogOut.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

LogOut.displayName = "LogOut"
