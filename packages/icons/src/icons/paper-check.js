import React, { forwardRef } from "react"
import p from "prop-types"
export const PaperCheck = forwardRef(function PaperCheck(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M20.1818 5H3.81818C2.81403 5 2 5.89543 2 7V16C2 17.1046 2.81403 18 3.81818 18H20.1818C21.186 18 22 17.1046 22 16V7C22 5.89543 21.186 5 20.1818 5Z"></path>
      <path d="M5 14L8 14"></path>
      <path d="M12 14L19 14"></path>
      <path d="M5 10L16 10"></path>
    </svg>
  )
})

PaperCheck.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

PaperCheck.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

PaperCheck.displayName = "PaperCheck"
