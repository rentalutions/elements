import React, { forwardRef } from "react"
import p from "prop-types"
export const Synced = forwardRef(function Synced(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 6L13.5 11.5L11 9"></path>
      <g clip-path="url(#clip0_2956_7)">
        <path d="M19 10.101C19.9535 10.2956 20.8372 10.7661 21.5355 11.4645C22.4732 12.4021 23 13.6739 23 15C23 16.3261 22.4732 17.5979 21.5355 18.5355C20.5979 19.4732 19.3261 20 18 20H9C7.50348 20.0011 6.03665 19.5824 4.76619 18.7916C3.49572 18.0007 2.47256 16.8693 1.81298 15.526C1.15339 14.1826 0.883828 12.6812 1.03491 11.1924C1.18599 9.70348 1.75167 8.28683 2.66766 7.10338C3.58364 5.91993 4.81322 5.01714 6.21666 4.49759C7.6201 3.97804 9.14113 3.86256 10.6069 4.16428C11.9738 4.44563 13.2415 5.07925 14.2855 6"></path>
      </g>
      <defs>
        <clippath id="clip0_2956_7">
          <path d="M0 0H24V24H0z"></path>
        </clippath>
      </defs>
    </svg>
  )
})

Synced.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Synced.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Synced.displayName = "Synced"
