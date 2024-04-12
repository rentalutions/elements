import React, { forwardRef } from "react"
import p from "prop-types"
export const Loudspeaker = forwardRef(function Loudspeaker(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 20 10 5 14 10 18 15 2 20ZM7 19 7.22427 19.4485C7.66938 20.3388 8.70135 20.7662 9.64558 20.4515L11.8787 19.7071C12.9983 19.3339 13.5278 18.0556 13 17V17M19 6 21 4M14 4 14.5 2M20 11H22"></path>
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
