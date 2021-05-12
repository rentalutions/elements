import React, { forwardRef } from "react"
import p from "prop-types"
export const Film = forwardRef(function Film(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z"></path>
      <path d="M7 2V22"></path>
      <path d="M17 2V22"></path>
      <path d="M2 12H22"></path>
      <path d="M2 7H7"></path>
      <path d="M2 17H7"></path>
      <path d="M17 17H22"></path>
      <path d="M17 7H22"></path>
    </svg>
  )
})

Film.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Film.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Film.displayName = "Film"
