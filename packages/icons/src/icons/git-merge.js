import React, { forwardRef } from "react"
import p from "prop-types"
export const GitMerge = forwardRef(function GitMerge(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"></path>
      <path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"></path>
      <path d="M6 21V9C6 11.3869 6.94821 13.6761 8.63604 15.364C10.3239 17.0518 12.6131 18 15 18"></path>
    </svg>
  )
})

GitMerge.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

GitMerge.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

GitMerge.displayName = "GitMerge"
