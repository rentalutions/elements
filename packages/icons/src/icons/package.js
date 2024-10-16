import React, { forwardRef } from "react"
import p from "prop-types"
export const Package = forwardRef(function Package(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12.89 1.45L20.89 5.45C21.2232 5.61557 21.5036 5.87082 21.6997 6.18704C21.8958 6.50326 21.9998 6.86791 22 7.24V16.77C21.9998 17.1421 21.8958 17.5067 21.6997 17.823C21.5036 18.1392 21.2232 18.3944 20.89 18.56L12.89 22.56C12.6121 22.699 12.3057 22.7714 11.995 22.7714C11.6843 22.7714 11.3779 22.699 11.1 22.56L3.1 18.56C2.76713 18.3923 2.48776 18.1349 2.29339 17.8168C2.09903 17.4988 1.99741 17.1327 2 16.76V7.24C2.0002 6.86791 2.10419 6.50326 2.30028 6.18704C2.49637 5.87082 2.77679 5.61557 3.11 5.45L11.11 1.45C11.3866 1.31257 11.6912 1.24106 12 1.24106C12.3088 1.24106 12.6134 1.31257 12.89 1.45V1.45Z"></path>
      <path d="M2.32 6.16 12 11 21.68 6.16M12 22.76V11M7 3.5 17 8.5"></path>
    </svg>
  )
})

Package.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Package.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Package.displayName = "Package"
