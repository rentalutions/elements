import React, { forwardRef } from "react"
import p from "prop-types"
export const Cast = forwardRef(function Cast(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M2 16.1C2.96089 16.296 3.84294 16.7702 4.53638 17.4636C5.22982 18.1571 5.70403 19.0391 5.9 20M2 12.05C4.03079 12.2759 5.92428 13.186 7.36911 14.6309C8.81395 16.0757 9.72414 17.9692 9.95 20M2 8V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H14"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <path d="M0 0H24V24H0z"></path>
        </clippath>
      </defs>
    </svg>
  )
})

Cast.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Cast.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Cast.displayName = "Cast"
