import React, { forwardRef } from "react"
import p from "prop-types"
export const DownloadCloud = forwardRef(function DownloadCloud(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M8 17 12 21 16 17M12 12V21"></path>
        <path d="M20.88 18.09C21.7494 17.4786 22.4014 16.6061 22.7413 15.5991C23.0812 14.5921 23.0914 13.503 22.7704 12.4898C22.4494 11.4766 21.8139 10.5921 20.9561 9.96456C20.0983 9.33703 19.0628 8.99916 18 8.99999H16.74C16.4392 7.82787 15.8765 6.73924 15.0941 5.81607C14.3118 4.89291 13.3301 4.15925 12.2232 3.67035C11.1163 3.18144 9.91285 2.95002 8.70353 2.99351C7.49421 3.037 6.31051 3.35426 5.24155 3.92142C4.17259 4.48858 3.24623 5.29084 2.53219 6.26782C1.81815 7.2448 1.33505 8.37104 1.11926 9.56174C0.903472 10.7524 0.960612 11.9766 1.28638 13.142C1.61215 14.3074 2.19806 15.3838 3 16.29"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <path d="M0 0H24V24H0z"></path>
        </clippath>
      </defs>
    </svg>
  )
})

DownloadCloud.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

DownloadCloud.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

DownloadCloud.displayName = "DownloadCloud"
