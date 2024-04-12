import React, { forwardRef } from "react"
import p from "prop-types"
export const FilePlus = forwardRef(function FilePlus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"></path>
      <path d="M14 2V8H20M12 18V12M9 15H15"></path>
    </svg>
  )
})

FilePlus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

FilePlus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

FilePlus.displayName = "FilePlus"
