import React, { forwardRef } from "react"
import p from "prop-types"
export const Power = forwardRef(function Power(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18.36 6.64C19.6184 7.89879 20.4753 9.50244 20.8223 11.2482 21.1693 12.9939 20.9909 14.8034 20.3096 16.4478 19.6284 18.0921 18.4748 19.4976 16.9948 20.4864 15.5148 21.4752 13.7749 22.0029 11.995 22.0029 10.2151 22.0029 8.47515 21.4752 6.99517 20.4864 5.51519 19.4976 4.36164 18.0921 3.68036 16.4478 2.99909 14.8034 2.82069 12.9939 3.16772 11.2482 3.51475 9.50244 4.37162 7.89879 5.63 6.64M12 2V12"></path>
    </svg>
  )
})

Power.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Power.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Power.displayName = "Power"
