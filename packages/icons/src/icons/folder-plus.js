import React, { forwardRef } from "react"
import p from "prop-types"
export const FolderPlus = forwardRef(function FolderPlus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142 21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142 2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579 2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579 21.7893 6.96086 22 7.46957 22 8V19ZM12 11V17M9 14H15"></path>
    </svg>
  )
})

FolderPlus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

FolderPlus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

FolderPlus.displayName = "FolderPlus"
