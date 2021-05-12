import React, { forwardRef } from "react"
import p from "prop-types"
export const Music = forwardRef(function Music(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M9 17H5C4.46957 17 3.96086 17.2107 3.58579 17.5858C3.21071 17.9609 3 18.4696 3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H7C7.53043 21 8.03914 20.7893 8.41421 20.4142C8.78929 20.0391 9 19.5304 9 19V17ZM21 15H17C16.4696 15 15.9609 15.2107 15.5858 15.5858C15.2107 15.9609 15 16.4696 15 17C15 17.5304 15.2107 18.0391 15.5858 18.4142C15.9609 18.7893 16.4696 19 17 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V15Z"></path>
      <path d="M9 17V5L21 3V15"></path>
    </svg>
  )
})

Music.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Music.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Music.displayName = "Music"
