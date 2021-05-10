import React, { forwardRef } from "react"
import p from "prop-types"
export const ExternalLink = forwardRef(function ExternalLink(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"></path>
      <path d="M15 3H21V9"></path>
      <path d="M10 14L21 3"></path>
    </svg>
  )
})

ExternalLink.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ExternalLink.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ExternalLink.displayName = "ExternalLink"
