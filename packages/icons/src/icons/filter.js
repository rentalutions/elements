import React, { forwardRef } from "react"
import p from "prop-types"
export const Filter = forwardRef(function Filter(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"></path>
    </svg>
  )
})

Filter.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Filter.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Filter.displayName = "Filter"
