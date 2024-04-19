import React, { forwardRef } from "react"
import p from "prop-types"
export const Share = forwardRef(function Share(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142 4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142 19.7893 21.0391 20 20.5304 20 20V12M16 6 12 2 8 6M12 2V15"></path>
    </svg>
  )
})

Share.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Share.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Share.displayName = "Share"
