import React, { forwardRef } from "react"
import p from "prop-types"
export const Loader = forwardRef(function Loader(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 2V6M12 18V22M4.93 4.92999 7.76 7.75999M16.24 16.24 19.07 19.07M2 12H6M18 12H22M4.93 19.07 7.76 16.24M16.24 7.75999 19.07 4.92999"></path>
    </svg>
  )
})

Loader.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Loader.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Loader.displayName = "Loader"
