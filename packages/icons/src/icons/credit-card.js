import React, { forwardRef } from "react"
import p from "prop-types"
export const CreditCard = forwardRef(function CreditCard(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"></path>
      <path d="M1 10H23"></path>
    </svg>
  )
})

CreditCard.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CreditCard.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CreditCard.displayName = "CreditCard"
