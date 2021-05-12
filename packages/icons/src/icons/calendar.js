import React, { forwardRef } from "react"
import p from "prop-types"
export const Calendar = forwardRef(function Calendar(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"></path>
      <path d="M16 2V6"></path>
      <path d="M8 2V6"></path>
      <path d="M3 10H21"></path>
    </svg>
  )
})

Calendar.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Calendar.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Calendar.displayName = "Calendar"
