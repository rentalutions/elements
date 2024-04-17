import React, { forwardRef } from "react"
import p from "prop-types"
export const List = forwardRef(function List(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M8 6H21M8 12H21M8 18H21"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <path d="M0 0H24V24H0z"></path>
        </clippath>
      </defs>
    </svg>
  )
})

List.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

List.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

List.displayName = "List"
