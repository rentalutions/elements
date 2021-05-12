import React, { forwardRef } from "react"
import p from "prop-types"
export const Droplet = forwardRef(function Droplet(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 2.69L17.66 8.35C18.7793 9.46861 19.5418 10.8941 19.8509 12.4461C20.16 13.998 20.0019 15.6069 19.3965 17.069C18.7912 18.5311 17.7658 19.7808 16.4501 20.6601C15.1344 21.5394 13.5875 22.0087 12.005 22.0087C10.4225 22.0087 8.8756 21.5394 7.55989 20.6601C6.24419 19.7808 5.21881 18.5311 4.61346 17.069C4.00812 15.6069 3.85 13.998 4.1591 12.4461C4.46821 10.8941 5.23066 9.46861 6.35 8.35L12 2.69Z"></path>
    </svg>
  )
})

Droplet.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Droplet.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Droplet.displayName = "Droplet"
