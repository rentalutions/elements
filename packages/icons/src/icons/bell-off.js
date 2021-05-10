import React, { forwardRef } from "react"
import p from "prop-types"
export const BellOff = forwardRef(function BellOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M8.56 2.89997C9.62531 2.29886 10.8295 1.98739 12.0527 1.9966C13.2759 2.00581 14.4753 2.33538 15.5314 2.95247C16.5876 3.56956 17.4636 4.45263 18.0721 5.51369C18.6807 6.57476 19.0006 7.77677 19 8.99997V13M13.73 21C13.5542 21.3031 13.3018 21.5546 12.9982 21.7295C12.6946 21.9044 12.3504 21.9964 12 21.9964C11.6496 21.9964 11.3054 21.9044 11.0018 21.7295C10.6982 21.5546 10.4458 21.3031 10.27 21M17 17H2C2.79565 17 3.55871 16.6839 4.12132 16.1213C4.68393 15.5587 5 14.7956 5 14V8.99997C4.99859 7.87969 5.26608 6.77543 5.78 5.77997L17 17Z"></path>
      <path d="M1 1L23 23"></path>
    </svg>
  )
})

BellOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

BellOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

BellOff.displayName = "BellOff"
