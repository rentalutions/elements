import React, { forwardRef } from "react"
import p from "prop-types"
export const HelpCircle = forwardRef(function HelpCircle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
        <path d="M9.09 8.99999C9.3251 8.33166 9.78915 7.7681 10.4 7.40912C11.0108 7.05015 11.7289 6.91893 12.4272 7.0387C13.1255 7.15848 13.7588 7.52151 14.2151 8.06352C14.6713 8.60552 14.9211 9.29151 14.92 9.99999C14.92 12 11.92 13 11.92 13"></path>
        <path d="M12 17H12.01"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24"></rect>
        </clippath>
      </defs>
    </svg>
  )
})

HelpCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

HelpCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

HelpCircle.displayName = "HelpCircle"
