import React, { forwardRef } from "react"
import p from "prop-types"
export const Anchor = forwardRef(function Anchor(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 8C13.6569 8 15 6.65685 15 5 15 3.34315 13.6569 2 12 2 10.3431 2 9 3.34315 9 5 9 6.65685 10.3431 8 12 8ZM12 22V8M5 12H2C2 14.6522 3.05357 17.1957 4.92893 19.0711 6.8043 20.9464 9.34784 22 12 22 14.6522 22 17.1957 20.9464 19.0711 19.0711 20.9464 17.1957 22 14.6522 22 12H19"></path>
    </svg>
  )
})

Anchor.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Anchor.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Anchor.displayName = "Anchor"
