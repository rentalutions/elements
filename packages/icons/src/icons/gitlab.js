import React, { forwardRef } from "react"
import p from "prop-types"
export const Gitlab = forwardRef(function Gitlab(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M22.65 14.39L12 22.13L1.35 14.39C1.20722 14.285 1.10132 14.1375 1.04743 13.9687C0.993549 13.7998 0.994447 13.6183 1.05 13.45L2.27 9.66999L4.71 2.15999C4.73367 2.0988 4.77134 2.044 4.82 1.99999C4.89924 1.92761 5.00268 1.88748 5.11 1.88748C5.21732 1.88748 5.32076 1.92761 5.4 1.99999C5.45138 2.04966 5.48924 2.11161 5.51 2.17999L7.95 9.66999H16.05L18.49 2.15999C18.5137 2.0988 18.5513 2.044 18.6 1.99999C18.6792 1.92761 18.7827 1.88748 18.89 1.88748C18.9973 1.88748 19.1008 1.92761 19.18 1.99999C19.2314 2.04966 19.2692 2.11161 19.29 2.17999L21.73 9.68999L23 13.45C23.0505 13.6235 23.0438 13.8086 22.9807 13.978C22.9177 14.1473 22.8017 14.2918 22.65 14.39Z"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24"></rect>
        </clippath>
      </defs>
    </svg>
  )
})

Gitlab.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Gitlab.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Gitlab.displayName = "Gitlab"
