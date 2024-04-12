import React, { forwardRef } from "react"
import p from "prop-types"
export const UserMinus = forwardRef(function UserMinus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716 14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716 1.42143 16.9217 1 17.9391 1 19V21M8.5 11C10.7091 11 12.5 9.20914 12.5 7 12.5 4.79086 10.7091 3 8.5 3 6.29086 3 4.5 4.79086 4.5 7 4.5 9.20914 6.29086 11 8.5 11ZM23 11H17"></path>
    </svg>
  )
})

UserMinus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

UserMinus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

UserMinus.displayName = "UserMinus"
