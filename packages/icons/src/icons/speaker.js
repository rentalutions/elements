import React, { forwardRef } from "react"
import p from "prop-types"
export const Speaker = forwardRef(function Speaker(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z"></path>
        <path d="M12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 10C9.79086 10 8 11.7909 8 14C8 16.2091 9.79086 18 12 18Z"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24"></rect>
        </clippath>
      </defs>
    </svg>
  )
})

Speaker.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Speaker.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Speaker.displayName = "Speaker"
