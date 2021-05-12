import React, { forwardRef } from "react"
import p from "prop-types"
export const Tool = forwardRef(function Tool(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M14.7 6.30001C14.5168 6.48694 14.4141 6.73826 14.4141 7.00001C14.4141 7.26176 14.5168 7.51308 14.7 7.70001L16.3 9.30001C16.4869 9.48324 16.7382 9.58587 17 9.58587C17.2617 9.58587 17.5131 9.48324 17.7 9.30001L21.47 5.53001C21.9728 6.6412 22.1251 7.87924 21.9065 9.07916C21.6878 10.2791 21.1087 11.3839 20.2463 12.2463C19.3838 13.1087 18.279 13.6878 17.0791 13.9065C15.8792 14.1251 14.6412 13.9728 13.53 13.47L6.61999 20.38C6.22217 20.7778 5.6826 21.0013 5.11999 21.0013C4.55738 21.0013 4.01782 20.7778 3.61999 20.38C3.22217 19.9822 2.99867 19.4426 2.99867 18.88C2.99867 18.3174 3.22217 17.7778 3.61999 17.38L10.53 10.47C10.0272 9.35882 9.87491 8.12078 10.0935 6.92087C10.3122 5.72095 10.8913 4.61617 11.7537 3.75373C12.6161 2.8913 13.7209 2.31218 14.9208 2.09355C16.1208 1.87493 17.3588 2.02718 18.47 2.53001L14.71 6.29001L14.7 6.30001Z"></path>
    </svg>
  )
})

Tool.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Tool.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Tool.displayName = "Tool"
