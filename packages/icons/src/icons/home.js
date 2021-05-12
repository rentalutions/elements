import React, { forwardRef } from "react"
import p from "prop-types"
export const Home = forwardRef(function Home(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"></path>
      <path d="M9 22V12H15V22"></path>
    </svg>
  )
})

Home.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Home.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Home.displayName = "Home"
