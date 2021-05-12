import React, { forwardRef } from "react"
import p from "prop-types"
export const Truck = forwardRef(function Truck(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 3H1V16H16V3Z"></path>
      <path d="M16 8H20L23 11V16H16V8Z"></path>
      <path d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"></path>
      <path d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"></path>
    </svg>
  )
})

Truck.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Truck.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Truck.displayName = "Truck"
