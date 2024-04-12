import React, { forwardRef } from "react"
import p from "prop-types"
export const DollarSign = forwardRef(function DollarSign(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513 6.36875 6.6815 6 7.57174 6 8.5 6 9.42826 6.36875 10.3185 7.02513 10.9749 7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251 17.6313 13.6815 18 14.5717 18 15.5 18 16.4283 17.6313 17.3185 16.9749 17.9749 16.3185 18.6313 15.4283 19 14.5 19H6"></path>
    </svg>
  )
})

DollarSign.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

DollarSign.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

DollarSign.displayName = "DollarSign"
