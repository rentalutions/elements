import React, { forwardRef } from "react"
import p from "prop-types"
export const Award = forwardRef(function Award(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"></path>
      <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"></path>
    </svg>
  )
})

Award.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Award.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Award.displayName = "Award"
