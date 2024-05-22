import React, { forwardRef } from "react"
import p from "prop-types"
export const MinusCircle = forwardRef(function MinusCircle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12 22 6.47715 17.5228 2 12 2 6.47715 2 2 6.47715 2 12 2 17.5228 6.47715 22 12 22ZM8 12H16"></path>
    </svg>
  )
})

MinusCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

MinusCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

MinusCircle.displayName = "MinusCircle"
