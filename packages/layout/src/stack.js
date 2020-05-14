import React, {
  Children,
  forwardRef,
  isValidElement,
  cloneElement,
} from "react"
import Box from "./box"

function Stack({ children, row = false, spacing = "2rem", ...props }, ref) {
  const validChildren = Children.toArray(children).filter(isValidElement)
  return (
    <Box
      {...props}
      display="flex"
      flexDirection={row ? "row" : "column"}
      ref={ref}
    >
      {validChildren.map((child, idx) =>
        cloneElement(
          child,
          row ? { mr: spacing, key: idx } : { mb: spacing, key: idx }
        )
      )}
    </Box>
  )
}

export default forwardRef(Stack)
