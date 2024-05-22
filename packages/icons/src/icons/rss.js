import React, { forwardRef } from "react"
import p from "prop-types"
export const Rss = forwardRef(function Rss(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 11C6.38695 11 8.67613 11.9482 10.364 13.636 12.0518 15.3239 13 17.6131 13 20M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629 18.3143 11.6869 20 15.7565 20 20M5 20C5.55228 20 6 19.5523 6 19 6 18.4477 5.55228 18 5 18 4.44772 18 4 18.4477 4 19 4 19.5523 4.44772 20 5 20Z"></path>
    </svg>
  )
})

Rss.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Rss.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Rss.displayName = "Rss"
