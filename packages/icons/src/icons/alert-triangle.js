import React, { forwardRef } from "react"
import p from "prop-types"
export const AlertTriangle = forwardRef(function AlertTriangle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10.29 3.85996L1.82001 18C1.64537 18.3024 1.55297 18.6453 1.55199 18.9945C1.55102 19.3437 1.6415 19.6871 1.81443 19.9905C1.98737 20.2939 2.23673 20.5467 2.53771 20.7238C2.8387 20.9009 3.1808 20.9961 3.53001 21H20.47C20.8192 20.9961 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0126 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.85996C13.5317 3.56607 13.2807 3.32308 12.9812 3.15444C12.6817 2.98581 12.3437 2.89722 12 2.89722C11.6563 2.89722 11.3183 2.98581 11.0188 3.15444C10.7193 3.32308 10.4683 3.56607 10.29 3.85996V3.85996Z"></path>
      <path d="M12 17H12.01"></path>
      <path d="M12 9V13"></path>
    </svg>
  )
})

AlertTriangle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

AlertTriangle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

AlertTriangle.displayName = "AlertTriangle"
