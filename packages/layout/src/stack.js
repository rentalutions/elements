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
    sx = {},
    ...props
  },
  ref
) {
  const validChildren = Children.toArray(children).filter(isValidElement)
  const marginRight = direction.map((dir) => (dir === "column" ? "0" : spacing))
  const marginBottom = direction.map((dir) =>
    dir === "column" ? spacing : "0"
  )
  return (
    <Flex {...props} sx={{ flexDirection: direction, ...sx }} ref={ref}>
      {validChildren.map((child, idx) => {
        if (wrapChildren)
          return (
            <Box
              display="inline-block"
              key={`stack-item-${idx}`}
              mr={marginRight}
              mb={marginBottom}
            >
              {child}
            </Box>
          )
        return cloneElement(child, {
          key: `stack-item-${idx}`,
          mr: marginRight,
          mb: marginBottom,
        })
      })}
    </Flex>
  )
}

export default forwardRef(Stack)
