import React, { forwardRef } from "react"
import p from "prop-types"
export const Database = forwardRef(function Database(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z"></path>
      <path d="M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12"></path>
      <path d="M3 5V19C3 20.66 7 22 12 22C17 22 21 20.66 21 19V5"></path>
    </svg>
  )
})

Database.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Database.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Database.displayName = "Database"
