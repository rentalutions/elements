import React, { forwardRef } from "react"
import p from "prop-types"
export const Send = forwardRef(function Send(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M22 2 11 13M22 2 15 22 11 13 2 9 22 2Z"></path>
    </svg>
  )
})

Send.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Send.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Send.displayName = "Send"
