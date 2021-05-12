import React, { forwardRef } from "react"
import p from "prop-types"
export const Shield = forwardRef(function Shield(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"></path>
    </svg>
  )
})

Shield.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Shield.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Shield.displayName = "Shield"
