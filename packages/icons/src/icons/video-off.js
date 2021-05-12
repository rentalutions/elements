import React, { forwardRef } from "react"
import p from "prop-types"
export const VideoOff = forwardRef(function VideoOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10.66 5H14C14.5304 5 15.0391 5.21071 15.4142 5.58579C15.7893 5.96086 16 6.46957 16 7V10.34L17 11.34L23 7V17M16 16V17C16 17.5304 15.7893 18.0391 15.4142 18.4142C15.0391 18.7893 14.5304 19 14 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V7C1 6.46957 1.21071 5.96086 1.58579 5.58579C1.96086 5.21071 2.46957 5 3 5H5L16 16Z"></path>
      <path d="M1 1L23 23"></path>
    </svg>
  )
})

VideoOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

VideoOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

VideoOff.displayName = "VideoOff"
