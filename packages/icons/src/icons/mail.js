import React, { forwardRef } from "react"
import p from "prop-types"
export const Mail = forwardRef(function Mail(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"></path>
      <path d="M22 6L12 13L2 6"></path>
    </svg>
  )
})

Mail.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Mail.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Mail.displayName = "Mail"
