/* eslint-disable no-nested-ternary */
import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  useMemo,
} from "react"
import { createPortal } from "react-dom"
import {
  usePortal,
  closestScrollable,
  useWindowResize as useBounds,
} from "@rent_avail/utils"

export function getPosition({ popover, target, parent, position: { x, y } }) {
  const defaultValue = { top: 0, left: 0, visibility: "hidden" }
  if (!popover || !target) return defaultValue
  const yOffset = !parent ? window.pageYOffset : 0
  const xOffset = !parent ? window.pageXOffset : 0
  const parentElement = parent || window
  const collisions = {
    top: target.top - popover.height < 0,
    right:
      (parentElement.innerWidth || parentElement.offsetWidth) <
      target.left + popover.width,
    bottom:
      (parentElement.innerHeight || parentElement.offsetHeight) <
      target.bottom + popover.height,
    left: target.left - popover.width < 0,
  }
  const rightCollision = collisions.right && !collisions.left
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
      : rightCollision
      ? alignRight
      : alignLeft
  if (Number.isNaN(top + left)) return defaultValue
  return {
    visibility: "visible",
    top,
    left,
  }
}

const Popover = forwardRef(function Popover(
  {
    targetRef,
    position = { x: "default", y: "default" },
    style,
    children,
    ...rest
  },
  forwardedRef
) {
  const parent = useMemo(() => closestScrollable(targetRef.current), [
    targetRef.current,
  ])
  const portal = usePortal(undefined, parent)
  const popoverRef = useRef(null)
  const popoverBounds = useBounds(popoverRef, parent)
  const targetBounds = useBounds(targetRef, parent)
  const [currentPosition, setPosition] = useState({
    top: 0,
    left: 0,
    visibility: "hidden",
  })
  useImperativeHandle(forwardedRef, () => ({ ...popoverRef.current }))
  useEffect(() => {
    const newPos = getPosition({
      popover: popoverBounds,
      target: targetBounds,
      parent,
      position,
    })
    setPosition(newPos)
  }, [targetBounds])
  return createPortal(
    <aside
      {...rest}
      ref={popoverRef}
      style={{ ...style, position: "absolute", ...currentPosition }}
    >
      {children}
    </aside>,
    portal
  )
})

export default Popover
