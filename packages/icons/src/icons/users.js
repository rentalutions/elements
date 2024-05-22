import React, { forwardRef } from "react"
import p from "prop-types"
export const Users = forwardRef(function Users(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716 15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716 1.42143 16.9217 1 17.9391 1 19V21M9 11C11.2091 11 13 9.20914 13 7 13 4.79086 11.2091 3 9 3 6.79086 3 5 4.79086 5 7 5 9.20914 6.79086 11 9 11ZM23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523 21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232 18.7122 5.25392 19.0078 6.11683 19.0078 7.005 19.0078 7.89318 18.7122 8.75608 18.1676 9.45769 17.623 10.1593 16.8604 10.6597 16 10.88"></path>
    </svg>
  )
})

Users.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Users.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Users.displayName = "Users"
