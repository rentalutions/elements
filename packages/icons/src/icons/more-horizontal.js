import React, { forwardRef } from "react"
import p from "prop-types"
export const MoreHorizontal = forwardRef(function MoreHorizontal(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 13C12.5523 13 13 12.5523 13 12 13 11.4477 12.5523 11 12 11 11.4477 11 11 11.4477 11 12 11 12.5523 11.4477 13 12 13ZM19 13C19.5523 13 20 12.5523 20 12 20 11.4477 19.5523 11 19 11 18.4477 11 18 11.4477 18 12 18 12.5523 18.4477 13 19 13ZM5 13C5.55228 13 6 12.5523 6 12 6 11.4477 5.55228 11 5 11 4.44772 11 4 11.4477 4 12 4 12.5523 4.44772 13 5 13Z"></path>
    </svg>
  )
})

MoreHorizontal.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

MoreHorizontal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

MoreHorizontal.displayName = "MoreHorizontal"
