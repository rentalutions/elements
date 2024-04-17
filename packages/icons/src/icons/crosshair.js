import React, { forwardRef } from "react"
import p from "prop-types"
export const Crosshair = forwardRef(function Crosshair(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12 22 6.47715 17.5228 2 12 2 6.47715 2 2 6.47715 2 12 2 17.5228 6.47715 22 12 22ZM22 12H18M6 12H2M12 6V2M12 22V18"></path>
    </svg>
  )
})

Crosshair.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Crosshair.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Crosshair.displayName = "Crosshair"
