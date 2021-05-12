import React, { forwardRef } from "react"
import p from "prop-types"
export const Loudspeaker = forwardRef(function Loudspeaker(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 20L10 5L14 10L18 15L2 20Z"></path>
      <path d="M7 19L7.22427 19.4485C7.66938 20.3388 8.70135 20.7662 9.64558 20.4515L11.8787 19.7071C12.9983 19.3339 13.5278 18.0556 13 17V17"></path>
      <path d="M19 6L21 4"></path>
      <path d="M14 4L14.5 2"></path>
      <path d="M20 11H22"></path>
    </svg>
  )
})

Loudspeaker.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Loudspeaker.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Loudspeaker.displayName = "Loudspeaker"
