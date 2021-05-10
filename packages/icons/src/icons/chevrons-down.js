import React, { forwardRef } from "react"
import p from "prop-types"
export const ChevronsDown = forwardRef(function ChevronsDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 13L12 18L17 13"></path>
      <path d="M7 6L12 11L17 6"></path>
    </svg>
  )
})

ChevronsDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ChevronsDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ChevronsDown.displayName = "ChevronsDown"
