import React, { forwardRef } from "react"
import p from "prop-types"
export const ArrowRight = forwardRef(function ArrowRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5 12H19M12 5 19 12 12 19"></path>
    </svg>
  )
})

ArrowRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ArrowRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ArrowRight.displayName = "ArrowRight"
