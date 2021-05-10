import React, { forwardRef } from "react"
import p from "prop-types"
export const Box = forwardRef(function Box(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12.89 1.45003L20.89 5.45003C21.2232 5.6156 21.5036 5.87085 21.6997 6.18707C21.8958 6.50329 21.9998 6.86794 22 7.24003V16.77C21.9998 17.1421 21.8958 17.5068 21.6997 17.823C21.5036 18.1392 21.2232 18.3945 20.89 18.56L12.89 22.56C12.6121 22.6991 12.3057 22.7715 11.995 22.7715C11.6843 22.7715 11.3779 22.6991 11.1 22.56L3.1 18.56C2.76713 18.3923 2.48775 18.1349 2.29339 17.8168C2.09902 17.4988 1.99741 17.1328 2 16.76V7.24003C2.0002 6.86794 2.10419 6.50329 2.30028 6.18707C2.49637 5.87085 2.77679 5.6156 3.11 5.45003L11.11 1.45003C11.3866 1.3126 11.6912 1.24109 12 1.24109C12.3088 1.24109 12.6134 1.3126 12.89 1.45003V1.45003Z"></path>
      <path d="M2.32 6.15997L12 11L21.68 6.15997"></path>
      <path d="M12 22.76V11"></path>
    </svg>
  )
})

Box.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Box.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Box.displayName = "Box"
