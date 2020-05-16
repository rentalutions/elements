import React, {
  Children,
  forwardRef,
  isValidElement,
  cloneElement,
} from "react"
import Flex from "./flex"

function Stack({ children, row = false, spacing = "2rem", ...props }, ref) {
  const validChildren = Children.toArray(children).filter(isValidElement)
  const spaceProps = row ? { mr: spacing } : { mb: spacing }
  return (
    <Flex {...props} flexDirection={row ? "row" : "column"} ref={ref}>
      {validChildren.map((child, idx) =>
        cloneElement(child, { key: idx, ...spaceProps })
      )}
    </Flex>
  )
}

export default forwardRef(Stack)
