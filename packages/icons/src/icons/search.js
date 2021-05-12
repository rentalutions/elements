import React, { forwardRef } from "react"
import p from "prop-types"
export const Search = forwardRef(function Search(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"></path>
      <path d="M21 21L16.65 16.65"></path>
    </svg>
  )
})

Search.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Search.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Search.displayName = "Search"
