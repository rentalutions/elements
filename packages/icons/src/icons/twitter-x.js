import React, { forwardRef } from "react"
import p from "prop-types"
export const TwitterX = forwardRef(function TwitterX(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path
        class="st0"
        d="M21.3 21.1 9.9 2.9 2.7 2.9 14.1 21.1zM2.7 21.1 9.9 14.5M14.1 9.5 21.3 2.9"
      ></path>
    </svg>
  )
})

TwitterX.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

TwitterX.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

TwitterX.displayName = "TwitterX"
