import React, { forwardRef } from "react"
import p from "prop-types"
export const Map = forwardRef(function Map(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M1 6V22L8 18 16 22 23 18V2L16 6 8 2 1 6ZM8 2V18M16 6V22"></path>
    </svg>
  )
})

Map.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Map.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Map.displayName = "Map"
