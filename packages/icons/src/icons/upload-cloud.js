import React, { forwardRef } from "react"
import p from "prop-types"
export const UploadCloud = forwardRef(function UploadCloud(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M16 16L12 12L8 16"></path>
        <path d="M12 12V21"></path>
        <path d="M20.39 18.39C21.3653 17.8583 22.1358 17.0169 22.5799 15.9986C23.0239 14.9804 23.1162 13.8432 22.8422 12.7667C22.5682 11.6901 21.9435 10.7355 21.0667 10.0534C20.1899 9.37138 19.1109 9.00073 18 9H16.74C16.4373 7.82924 15.8732 6.74233 15.09 5.82099C14.3067 4.89965 13.3249 4.16785 12.2181 3.68061C11.1114 3.19336 9.90856 2.96336 8.70012 3.00788C7.49169 3.05241 6.30907 3.3703 5.24118 3.93766C4.17329 4.50503 3.24792 5.3071 2.53463 6.28358C1.82134 7.26006 1.3387 8.38554 1.12299 9.57539C0.907276 10.7653 0.964111 11.9885 1.28922 13.1533C1.61433 14.318 2.19925 15.3939 3.00001 16.3"></path>
        <path d="M16 16L12 12L8 16"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24"></rect>
        </clippath>
      </defs>
    </svg>
  )
})

UploadCloud.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

UploadCloud.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

UploadCloud.displayName = "UploadCloud"
