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

export function getPosition({ popover, target, parent, position: { x, y } }) {
  const defaultValue = { top: 0, left: 0, visibility: "hidden" }
  if (!popover || !target) return defaultValue
  const yOffset = !parent ? window.pageYOffset : 0
  const xOffset = !parent ? window.pageXOffset : 0
  /**
   * We need to check width and height differently here. The viewport should be
   * the vertical bounding box and a parent (if exists) should be the horizontal
   * bounding box.
   */
  const parentOffset = parent && parent.getBoundingClientRect()
  const collisions = {
    top: parentOffset
      ? parentOffset.top - popover.height <= 0
      : target.top - popover.height <= 0,
    right: parentOffset
      ? window.innerWidth <= parentOffset.left + popover.width
      : window.innerWidth <= target.left + popover.width,
    bottom: parentOffset
      ? window.innerHeight <= parentOffset.top + popover.height
      : window.innerHeight <= target.bottom + popover.height,
    left: parentOffset
      ? parentOffset.left - popover.width <= 0
      : target.left - popover.width <= 0,
  }
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
  const parent = useMemo(
    () => parentRef?.current || closestScrollable(targetRef.current),
    [targetRef.current, parentRef?.current]
  )
  const portalTarget = usePortal(undefined, parent)
  const popoverBounds = useResize(popoverRef, parent)
  const targetBounds = useResize(targetRef, parent)
  const [currentPosition, setPosition] = useState({
    top: 0,
    left: 0,
    visibility: "hidden",
  })
  useEffect(() => {
    const newPos = getPosition({
      popover: popoverBounds,
      target: targetBounds,
      parent: parentRef?.current,
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
