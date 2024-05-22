import React, { forwardRef } from "react"
import p from "prop-types"
export const Radio = forwardRef(function Radio(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 14C13.1046 14 14 13.1046 14 12 14 10.8954 13.1046 10 12 10 10.8954 10 10 10.8954 10 12 10 13.1046 10.8954 14 12 14ZM16.24 7.76C16.7979 8.31724 17.2404 8.97897 17.5424 9.70736 17.8443 10.4357 17.9997 11.2165 17.9997 12.005 17.9997 12.7935 17.8443 13.5743 17.5424 14.3026 17.2404 15.031 16.7979 15.6928 16.24 16.25M7.76 16.24C7.20214 15.6828 6.75959 15.021 6.45764 14.2926 6.1557 13.5643 6.00028 12.7835 6.00028 11.995 6.00028 11.2065 6.1557 10.4257 6.45764 9.69736 6.75959 8.96897 7.20214 8.30724 7.76 7.75M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12 21.9979 14.6516 20.9447 17.1947 19.07 19.07M4.93 19.07C3.05529 17.1947 2.00214 14.6516 2.00214 12 2.00214 9.34836 3.05529 6.80528 4.93 4.93"></path>
    </svg>
  )
})

Radio.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Radio.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Radio.displayName = "Radio"
