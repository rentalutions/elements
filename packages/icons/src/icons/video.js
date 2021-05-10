import React, { forwardRef } from "react"
import p from "prop-types"
export const Video = forwardRef(function Video(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M23 7L16 12L23 17V7Z"></path>
      <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"></path>
    </svg>
  )
})

Video.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Video.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Video.displayName = "Video"
