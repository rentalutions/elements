import React, { forwardRef } from "react"
import p from "prop-types"
export const Cpu = forwardRef(function Cpu(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z"></path>
      <path d="M15 9H9V15H15V9Z"></path>
      <path d="M9 1V4"></path>
      <path d="M15 1V4"></path>
      <path d="M9 20V23"></path>
      <path d="M15 20V23"></path>
      <path d="M20 9H23"></path>
      <path d="M20 14H23"></path>
      <path d="M1 9H4"></path>
      <path d="M1 14H4"></path>
    </svg>
  )
})

Cpu.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Cpu.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Cpu.displayName = "Cpu"
