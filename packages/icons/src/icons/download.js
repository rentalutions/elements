import React, { forwardRef } from "react"
import p from "prop-types"
export const Download = forwardRef(function Download(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142 20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142 3.21071 20.0391 3 19.5304 3 19V15M7 10 12 15 17 10M12 15V3"></path>
    </svg>
  )
})

Download.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Download.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Download.displayName = "Download"
