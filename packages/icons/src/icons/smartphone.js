import React, { forwardRef } from "react"
import p from "prop-types"
export const Smartphone = forwardRef(function Smartphone(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"></path>
      <path d="M12 18H12.01"></path>
    </svg>
  )
})

Smartphone.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Smartphone.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Smartphone.displayName = "Smartphone"
