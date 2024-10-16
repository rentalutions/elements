import React, { forwardRef } from "react"
import p from "prop-types"
export const Share2 = forwardRef(function Share2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 8C19.6569 8 21 6.65685 21 5 21 3.34315 19.6569 2 18 2 16.3431 2 15 3.34315 15 5 15 6.65685 16.3431 8 18 8ZM6 15C7.65685 15 9 13.6569 9 12 9 10.3431 7.65685 9 6 9 4.34315 9 3 10.3431 3 12 3 13.6569 4.34315 15 6 15ZM18 22C19.6569 22 21 20.6569 21 19 21 17.3431 19.6569 16 18 16 16.3431 16 15 17.3431 15 19 15 20.6569 16.3431 22 18 22ZM8.59 13.51 15.42 17.49M15.41 6.51 8.59 10.49"></path>
    </svg>
  )
})

Share2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Share2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Share2.displayName = "Share2"
