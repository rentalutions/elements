import React, { forwardRef } from "react"
import p from "prop-types"
export const GitCommit = forwardRef(function GitCommit(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
      <path d="M1.04999 12H6.99999"></path>
      <path d="M17.01 12H22.96"></path>
    </svg>
  )
})

GitCommit.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

GitCommit.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

GitCommit.displayName = "GitCommit"
