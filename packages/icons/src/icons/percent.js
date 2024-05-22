import React, { forwardRef } from "react"
import p from "prop-types"
export const Percent = forwardRef(function Percent(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 5 5 19M6.5 9C7.88071 9 9 7.88071 9 6.5 9 5.11929 7.88071 4 6.5 4 5.11929 4 4 5.11929 4 6.5 4 7.88071 5.11929 9 6.5 9ZM17.5 20C18.8807 20 20 18.8807 20 17.5 20 16.1193 18.8807 15 17.5 15 16.1193 15 15 16.1193 15 17.5 15 18.8807 16.1193 20 17.5 20Z"></path>
    </svg>
  )
})

Percent.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Percent.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Percent.displayName = "Percent"
