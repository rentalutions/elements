import React, { forwardRef } from "react"
import p from "prop-types"
export const ToggleRight = forwardRef(function ToggleRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 5H8C4.13401 5 1 8.13401 1 12C1 15.866 4.13401 19 8 19H16C19.866 19 23 15.866 23 12C23 8.13401 19.866 5 16 5Z"></path>
      <path d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"></path>
    </svg>
  )
})

ToggleRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ToggleRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ToggleRight.displayName = "ToggleRight"
