import React, { forwardRef } from "react"
import p from "prop-types"
export const User = forwardRef(function User(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716 18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716 4.42143 16.9217 4 17.9391 4 19V21M12 11C14.2091 11 16 9.20914 16 7 16 4.79086 14.2091 3 12 3 9.79086 3 8 4.79086 8 7 8 9.20914 9.79086 11 12 11Z"></path>
    </svg>
  )
})

User.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

User.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

User.displayName = "User"
