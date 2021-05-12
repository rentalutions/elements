import React, { forwardRef } from "react"
import p from "prop-types"
export const LifeBuoy = forwardRef(function LifeBuoy(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
      <path d="M4.92999 4.92999L9.16999 9.16999"></path>
      <path d="M14.83 14.83L19.07 19.07"></path>
      <path d="M14.83 9.16999L19.07 4.92999"></path>
      <path d="M14.83 9.17001L18.36 5.64001"></path>
      <path d="M4.92999 19.07L9.16999 14.83"></path>
    </svg>
  )
})

LifeBuoy.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

LifeBuoy.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

LifeBuoy.displayName = "LifeBuoy"
