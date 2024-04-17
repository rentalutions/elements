import React, { forwardRef } from "react"
import p from "prop-types"
export const Delete = forwardRef(function Delete(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 4H8L1 12 8 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142 22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579 22.0391 4.21071 21.5304 4 21 4V4ZM18 9 12 15M12 9 18 15"></path>
    </svg>
  )
})

Delete.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Delete.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Delete.displayName = "Delete"
