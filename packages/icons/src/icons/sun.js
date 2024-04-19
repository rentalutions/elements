import React, { forwardRef } from "react"
import p from "prop-types"
export const Sun = forwardRef(function Sun(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 17C14.7614 17 17 14.7614 17 12 17 9.23858 14.7614 7 12 7 9.23858 7 7 9.23858 7 12 7 14.7614 9.23858 17 12 17ZM12 1V3M12 21V23M4.22 4.22 5.64 5.64M18.36 18.36 19.78 19.78M1 12H3M21 12H23M4.22 19.78 5.64 18.36M18.36 5.64 19.78 4.22"></path>
    </svg>
  )
})

Sun.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Sun.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Sun.displayName = "Sun"
