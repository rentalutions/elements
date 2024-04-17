import React, { forwardRef } from "react"
import p from "prop-types"
export const CloudLightning = forwardRef(function CloudLightning(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M19 16.9C20.2152 16.6532 21.2953 15.9638 22.0307 14.9655C22.7661 13.9671 23.1043 12.7312 22.9797 11.4975C22.8551 10.2638 22.2765 9.12046 21.3563 8.28937C20.4361 7.45828 19.24 6.99875 18 6.99999H16.74C16.4087 5.71731 15.764 4.53698 14.8639 3.56498C13.9638 2.59298 12.8363 1.85972 11.5828 1.43106C10.3293 1.00239 8.98898 0.891726 7.68214 1.109C6.3753 1.32628 5.14287 1.86469 4.09551 2.6759C3.04814 3.48711 2.21863 4.54573 1.68144 5.75671C1.14424 6.96768 0.916192 8.29311 1.01776 9.61399C1.11932 10.9349 1.54732 12.2098 2.26332 13.3245C2.97933 14.4391 3.96093 15.3584 5.12 16"></path>
        <path d="M13 11L9 17H15L11 23"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <path d="M0 0H24V24H0z"></path>
        </clippath>
      </defs>
    </svg>
  )
})

CloudLightning.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CloudLightning.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CloudLightning.displayName = "CloudLightning"
