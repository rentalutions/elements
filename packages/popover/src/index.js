/* eslint-disable no-nested-ternary */
import React, { useRef, forwardRef, useState, useEffect, useMemo } from "react"
import { createPortal } from "react-dom"
import { Box } from "@rent_avail/core"
import {
  usePortal,
  closestScrollable,
  useResize,
  mergeRefs,
} from "@rent_avail/utils"

function calcLeftPosition({
  position,
  collisions,
  targetBounds,
  popoverBounds,
  container,
}) {
  const alignRight =
    targetBounds.right - popoverBounds.width + container.scrollLeft
  const alignLeft = targetBounds.left + container.scrollLeft
  switch (position) {
    case "left":
      return alignLeft
    case "right":
      return alignRight
    default:
      return collisions.right && !collisions.left ? alignRight : alignLeft
  }
}

function calcTopPosition({
  position,
  collisions,
  targetBounds,
  popoverBounds,
  container,
  paddingY,
}) {
  const alignTop =
    targetBounds.top - paddingY - popoverBounds.height + container.scrollTop
  const alignBottom =
    targetBounds.top + paddingY + targetBounds.height + container.scrollTop
  switch (position) {
    case "top":
      return alignTop
    case "bottom":
      return alignBottom
    default:
      return collisions.bottom && !collisions.top ? alignTop : alignBottom
  }
}

function calcPosition({
  targetBounds,
  popoverBounds,
  container,
  collisions,
  position: { x, y },
  paddingY,
}) {
  return {
    top: calcTopPosition({
      position: y,
      collisions,
      targetBounds,
      popoverBounds,
      container,
      paddingY,
    }),
    left: calcLeftPosition({
      position: x,
      collisions,
      targetBounds,
      popoverBounds,
      container,
    }),
  }
}

export function getCollisions({
  targetBounds,
  popoverBounds,
  container,
  paddingY = 0,
}) {
  return {
    top: targetBounds.top - paddingY - popoverBounds.height < 0,
    right: targetBounds.left + popoverBounds.width > container.clientWidth,
    bottom:
      targetBounds.bottom + paddingY + popoverBounds.height >
      container.clientHeight,
    left: targetBounds.right - popoverBounds.width < 0,
  }
}

export function getPosition({
  popoverBounds,
  targetBounds,
  container,
  collisions,
  position: { x, y },
  paddingY,
}) {
  const { top, left } = calcPosition({
    targetBounds,
    popoverBounds,
    container,
    collisions,
    position: { x, y },
    paddingY,
  })
  if (Number.isNaN(top + left)) {
    return false
  }
  return { top, left, visibility: "visible" }
}

const Popover = forwardRef(function Popover(
  {
    targetRef,
    parentRef,
    position = { x: "default", y: "default" },
    style,
    sx = {},
    as = "aside",
    paddingY = 12,
    ...rest
  },
  ref
) {
  const popoverRef = useRef(null)
  const container = useMemo(
    // defaults to document.body
    () => closestScrollable(targetRef.current),
    [targetRef.current]
  )
  const defaultPosition = { top: 0, left: 0, visibility: "hidden" }
  const portalTarget = usePortal(undefined, parentRef?.current || container)
  const popoverBounds = useResize(popoverRef, container)
  const targetBounds = useResize(targetRef, container)
  const [currentPosition, setPosition] = useState(defaultPosition)

  useEffect(() => {
    if (targetBounds && popoverBounds) {
      const collisions = getCollisions({
        targetBounds,
        popoverBounds,
        container,
        paddingY,
      })
      const newPos =
        getPosition({
          targetBounds,
          popoverBounds,
          container,
          collisions,
          position,
          paddingY,
        }) || defaultPosition
      setPosition(newPos)
    }
  }, [targetBounds, popoverBounds])
  return createPortal(
    <Box
      {...rest}
      as={as}
      ref={mergeRefs(ref, popoverRef)}
      sx={{ position: "absolute", ...sx }}
      style={{ ...style, ...currentPosition }}
    />,
    portalTarget
  )
})

export default Popover
