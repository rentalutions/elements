import React, { forwardRef } from "react"
import p from "prop-types"
export const Tablet = forwardRef(function Tablet(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 18H12.01M18 22H6C4.89543 22 4 21.1046 4 20L4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4L20 20C20 21.1046 19.1046 22 18 22Z"></path>
    </svg>
  )
})

Tablet.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Tablet.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Tablet.displayName = "Tablet"
