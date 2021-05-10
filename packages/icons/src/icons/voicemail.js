import React, { forwardRef } from "react"
import p from "prop-types"
export const Voicemail = forwardRef(function Voicemail(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5.5 16C7.98528 16 10 13.9853 10 11.5C10 9.01472 7.98528 7 5.5 7C3.01472 7 1 9.01472 1 11.5C1 13.9853 3.01472 16 5.5 16Z"></path>
      <path d="M18.5 16C20.9853 16 23 13.9853 23 11.5C23 9.01472 20.9853 7 18.5 7C16.0147 7 14 9.01472 14 11.5C14 13.9853 16.0147 16 18.5 16Z"></path>
      <path d="M5.5 16H18.5"></path>
    </svg>
  )
})

Voicemail.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Voicemail.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Voicemail.displayName = "Voicemail"
