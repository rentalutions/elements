import React, {
  Children,
  forwardRef,
  isValidElement,
  cloneElement,
} from "react"
import Box from "./box"
import Flex from "./flex"

function Stack(
  {
    children,
    direction = ["column"],
    spacing = "2rem",
    wrapChildren = false,
    ...props
  },
  ref
) {
  const validChildren = Children.toArray(children).filter(isValidElement)
  const spaceProps = row ? { mr: spacing } : { mb: spacing }
  return (
    <Flex {...props} flexDirection={direction} ref={ref}>
      {validChildren.map((child, idx) => {
        if (wrapChildren)
          return (
            <Box
              display="inline-block"
              key={`stack-item-${idx}`}
              {...spaceProps}
            >
              {child}
            </Box>
          )
        return cloneElement(child, { key: `stack-item-${idx}`, ...spaceProps })
      })}
    </Flex>
  )
}

export default forwardRef(Stack)
