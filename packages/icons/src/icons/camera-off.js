import React, { forwardRef } from "react"
import p from "prop-types"
export const CameraOff = forwardRef(function CameraOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M1 1 23 23M9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579 22.7893 6.96086 23 7.46957 23 8V17.34M15.28 15.28C14.9481 15.765 14.5134 16.171 14.0068 16.469 13.5002 16.7669 12.9342 16.9496 12.3489 17.004 11.7637 17.0584 11.1737 16.9831 10.6209 16.7836 10.0681 16.5841 9.56601 16.2652 9.15042 15.8496 8.73483 15.434 8.41593 14.9319 8.2164 14.3791 8.01688 13.8263 7.94163 13.2363 7.99601 12.6511 8.05039 12.0658 8.23306 11.4998 8.53103 10.9932 8.829 10.4866 9.23495 10.0519 9.72 9.72M21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142 1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579 1.96086 6.21071 2.46957 6 3 6H6L21 21Z"></path>
    </svg>
  )
})

CameraOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

CameraOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

CameraOff.displayName = "CameraOff"
