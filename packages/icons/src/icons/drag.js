import React, { forwardRef } from "react"
import p from "prop-types"
export const Drag = forwardRef(function Drag(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10 4C10 5.10457 9.10457 6 8 6 6.89543 6 6 5.10457 6 4 6 2.89543 6.89543 2 8 2 9.10457 2 10 2.89543 10 4ZM10 12C10 13.1046 9.10457 14 8 14 6.89543 14 6 13.1046 6 12 6 10.8954 6.89543 10 8 10 9.10457 10 10 10.8954 10 12ZM10 20C10 21.1046 9.10457 22 8 22 6.89543 22 6 21.1046 6 20 6 18.8954 6.89543 18 8 18 9.10457 18 10 18.8954 10 20ZM18 4C18 5.10457 17.1046 6 16 6 14.8954 6 14 5.10457 14 4 14 2.89543 14.8954 2 16 2 17.1046 2 18 2.89543 18 4ZM18 12C18 13.1046 17.1046 14 16 14 14.8954 14 14 13.1046 14 12 14 10.8954 14.8954 10 16 10 17.1046 10 18 10.8954 18 12ZM18 20C18 21.1046 17.1046 22 16 22 14.8954 22 14 21.1046 14 20 14 18.8954 14.8954 18 16 18 17.1046 18 18 18.8954 18 20Z"></path>
    </svg>
  )
})

Drag.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Drag.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Drag.displayName = "Drag"
