import React, { forwardRef } from "react"
import p from "prop-types"
export const Pocket = forwardRef(function Pocket(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V11C22 13.6522 20.9464 16.1957 19.0711 18.0711C17.1957 19.9464 14.6522 21 12 21C10.6868 21 9.38642 20.7413 8.17317 20.2388C6.95991 19.7362 5.85752 18.9997 4.92893 18.0711C3.05357 16.1957 2 13.6522 2 11V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3V3Z"></path>
      <path d="M8 10L12 14L16 10"></path>
    </svg>
  )
})

Pocket.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Pocket.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Pocket.displayName = "Pocket"
