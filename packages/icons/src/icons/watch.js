import React, { forwardRef } from "react"
import p from "prop-types"
export const Watch = forwardRef(function Watch(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"></path>
      <path d="M12 9V12L13.5 13.5"></path>
      <path d="M16.51 17.35L16.16 21.18C16.1149 21.6786 15.8845 22.1422 15.5142 22.4792C15.1439 22.8162 14.6607 23.002 14.16 23H9.83C9.32932 23.002 8.8461 22.8162 8.4758 22.4792C8.1055 22.1422 7.87505 21.6786 7.83 21.18L7.48 17.35M7.49 6.64999L7.84 2.81999C7.8849 2.32306 8.11393 1.86087 8.48211 1.52414C8.8503 1.18741 9.33105 1.00046 9.83 0.999986H14.18C14.6807 0.997954 15.1639 1.18378 15.5342 1.52076C15.9045 1.85773 16.1349 2.32134 16.18 2.81999L16.53 6.64999"></path>
    </svg>
  )
})

Watch.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Watch.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Watch.displayName = "Watch"
