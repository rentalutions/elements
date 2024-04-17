import React, { forwardRef } from "react"
import p from "prop-types"
export const Gift = forwardRef(function Gift(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M20 12V22H4V12M22 7H2V12H22V7ZM12 22V7M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777 5.26339 5.79893 5 5.16304 5 4.5 5 3.83696 5.26339 3.20107 5.73223 2.73223 6.20107 2.26339 6.83696 2 7.5 2 11 2 12 7 12 7ZM12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777 18.7366 5.79893 19 5.16304 19 4.5 19 3.83696 18.7366 3.20107 18.2678 2.73223 17.7989 2.26339 17.163 2 16.5 2 13 2 12 7 12 7Z"></path>
    </svg>
  )
})

Gift.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Gift.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Gift.displayName = "Gift"
