import React, { forwardRef } from "react"
import p from "prop-types"
export const BookOpen = forwardRef(function BookOpen(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157 11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787 10.5587 18.3161 9.79565 18 9 18H2V3ZM22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157 12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787 13.4413 18.3161 14.2044 18 15 18H22V3Z"></path>
    </svg>
  )
})

BookOpen.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

BookOpen.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

BookOpen.displayName = "BookOpen"
