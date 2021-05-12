import React, { forwardRef } from "react"
import p from "prop-types"
export const PhoneOff = forwardRef(function PhoneOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5.18999 12.81C3.50585 10.213 2.45435 7.25717 2.11999 4.18001C2.095 3.90347 2.12787 3.62477 2.21649 3.36163C2.30512 3.09849 2.44756 2.85669 2.63476 2.65163C2.82196 2.44656 3.0498 2.28271 3.30379 2.17053C3.55777 2.05834 3.83233 2.00027 4.10999 2.00001H7.10999C7.5953 1.99523 8.06579 2.16708 8.43376 2.48354C8.80173 2.79999 9.04207 3.23945 9.10999 3.72001C9.23662 4.68007 9.47144 5.62273 9.80999 6.53001C9.94454 6.88793 9.97366 7.27692 9.8939 7.65089C9.81415 8.02485 9.62886 8.36812 9.35999 8.64001L8.08999 9.91001M10.68 13.31C11.6948 14.3258 12.8418 15.2003 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7605 14.9579 21.2 15.1983 21.5165 15.5662C21.8329 15.9342 22.0048 16.4047 22 16.89V19.89C22.0011 20.1685 21.9441 20.4442 21.8325 20.6994C21.7209 20.9545 21.5573 21.1836 21.3521 21.3719C21.1468 21.5601 20.9046 21.7035 20.6407 21.7927C20.3769 21.8819 20.0974 21.9151 19.82 21.89C16.7428 21.5556 13.787 20.5041 11.19 18.82C9.98526 18.0551 8.86852 17.1597 7.85999 16.15L10.68 13.31Z"></path>
      <path d="M23 1L1 23"></path>
    </svg>
  )
})

PhoneOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

PhoneOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

PhoneOff.displayName = "PhoneOff"
