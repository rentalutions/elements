import React, { forwardRef } from "react"
import p from "prop-types"
export const AlignJustify = forwardRef(function AlignJustify(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 10H3"></path>
      <path d="M21 6H3"></path>
      <path d="M21 14H3"></path>
      <path d="M21 18H3"></path>
    </svg>
  )
})

AlignJustify.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

AlignJustify.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

AlignJustify.displayName = "AlignJustify"
