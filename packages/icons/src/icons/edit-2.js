import React, { forwardRef } from "react"
import p from "prop-types"
export const Edit2 = forwardRef(function Edit2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 3L21 8L8 21H3V16L16 3Z"></path>
    </svg>
  )
})

Edit2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Edit2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Edit2.displayName = "Edit2"
