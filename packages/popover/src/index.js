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
import { dequal } from "dequal"

export function getCollisions({ target, popover, container }) {
  return {
    top: target.top - popover.height < 0,
    right: target.left + popover.width > container.width,
    bottom: target.bottom + popover.height > container.height,
    left: target.right - popover.width < 0,
  }
}

export function getPosition({
  popover,
  target,
  container,
  position: { x, y },
}) {
  const defaultValue = { top: 0, left: 0, visibility: "hidden" }
  if (!popover || !target || !container) return defaultValue
  const yOffset = window.pageYOffset
  const xOffset = window.pageXOffset
  const collisions = getCollisions({ target, popover, container })
  const topCollision = collisions.bottom && !collisions.top
  const alignTop = target.top - 12 - popover.height + yOffset
  const alignBottom = target.top + 12 + target.height + yOffset
  const alignRight = target.right - popover.width + xOffset
  const alignLeft = target.left + xOffset
  const top =
    y === "top"
      ? alignTop
      : y === "bottom"
      ? alignBottom
      : topCollision
      ? alignTop
      : alignBottom
  const left =
    x === "left"
      ? alignLeft
      : x === "right"
      ? alignRight
      : collisions.right
      ? alignRight
      : alignLeft
  if (Number.isNaN(top + left)) return defaultValue
  return {
    visibility: "visible",
    top,
    left,
  }
}

function deepCompare(value) {
  const ref = useRef()
  if (!dequal(value, ref.current)) {
    ref.current = value
  }
  return ref.current
}

const Popover = forwardRef(function Popover(
  {
    targetRef,
    parentRef,
    position = { x: "default", y: "default" },
    style,
    sx = {},
    as = "aside",
    ...rest
  },
  ref
) {
  const popoverRef = useRef(null)
  const container = useMemo(
    () => closestScrollable(targetRef.current),
    [targetRef.current]
  )
  const portalTarget = usePortal(undefined, parentRef?.current || container)
  const popoverBounds = useResize(popoverRef, container)
  const targetBounds = useResize(targetRef, container)
  const [currentPosition, setPosition] = useState({
    top: 0,
    left: 0,
    visibility: "hidden",
  })
  useEffect(() => {
    const newPos = getPosition({
      popover: popoverBounds,
      target: targetBounds,
      container: container.getBoundingClientRect(),
      position,
    })
    setPosition(newPos)
  }, deepCompare([targetBounds]))
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
