import React, { forwardRef } from "react"
import p from "prop-types"
export const PhoneOutgoing = forwardRef(function PhoneOutgoing(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M23 7V1H17M16 8 23 1M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294 21.7209 20.9845 21.5573 21.2136 21.3521 21.4019 21.1469 21.5901 20.9046 21.7335 20.6408 21.8227 20.3769 21.9119 20.0974 21.9451 19.82 21.92 16.7428 21.5856 13.787 20.5342 11.19 18.85 8.77383 17.3147 6.72534 15.2662 5.19 12.85 3.49998 10.2412 2.44824 7.271 2.12 4.18001 2.09501 3.90347 2.12788 3.62477 2.2165 3.36163 2.30513 3.09849 2.44757 2.85669 2.63477 2.65163 2.82196 2.44656 3.04981 2.28271 3.30379 2.17053 3.55778 2.05834 3.83234 2.00027 4.11 2.00001H7.11C7.59531 1.99523 8.06579 2.16708 8.43376 2.48354 8.80173 2.79999 9.04208 3.23945 9.11 3.72001 9.23662 4.68007 9.47145 5.62273 9.81 6.53001 9.94455 6.88793 9.97366 7.27692 9.89391 7.65089 9.81415 8.02485 9.62886 8.36812 9.36 8.64001L8.09 9.91001C9.51356 12.4136 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1859 16.3491 14.1061 16.7231 14.0263 17.1121 14.0555 17.47 14.19 18.3773 14.5286 19.3199 14.7634 20.28 14.89 20.7658 14.9585 21.2094 15.2032 21.5265 15.5775 21.8437 15.9518 22.0122 16.4296 22 16.92Z"></path>
    </svg>
  )
})

PhoneOutgoing.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

PhoneOutgoing.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

PhoneOutgoing.displayName = "PhoneOutgoing"
