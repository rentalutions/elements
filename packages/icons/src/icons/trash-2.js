import React, { forwardRef } from "react"
import p from "prop-types"
export const Trash2 = forwardRef(function Trash2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 6H5 21M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579 8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579 15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142 18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142 5.21071 21.0391 5 20.5304 5 20V6H19ZM10 11V17M14 11V17"></path>
    </svg>
  )
})

Trash2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Trash2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Trash2.displayName = "Trash2"
