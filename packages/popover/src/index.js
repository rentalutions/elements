import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  memo,
} from "react"
import { createPortal } from "react-dom"
import { usePortal, useWindowResize as useBounds } from "@rent_avail/utils"

export function getPosition({ popover, target, parent }) {
  if (!popover || !target) return null
  const collisions = {
    top: target.top - popover.height < 0,
    right:
      (parent ? parent.innerWidth : window.innerWidth) <
      target.left + popover.width,
    bottom:
      (parent ? parent.innerHeight : window.innerHeight) <
      target.bottom + popover.height,
    left: target.left - popover.width < 0,
  }
  const rightCollision = collisions.right && !collisions.left
  const topCollision = collisions.bottom && !collisions.top
  const alignTop =
    target.top - 12 - popover.height + (!parent ? window.pageYOffset : 0)
  const alignBottom =
    target.top + 12 + target.height + (!parent ? window.pageYOffset : 0)
  const alignRight =
    target.right - popover.width + (!parent ? window.pageXOffset : 0)
  const alignLeft = target.left + (!parent ? window.pageXOffset : 0)
  const top = topCollision ? alignTop : alignBottom
  const left = rightCollision ? alignRight : alignLeft
  if (Number.isNaN(top + left)) return { top: 0, left: 0, visibility: "hidden" }
  return {
    visibility: "visible",
    top,
    left,
  }
}

const Popover = forwardRef(function Popover(
  { parentRef, targetRef, position = getPosition, style, children, ...rest },
  forwardedRef
) {
  const portal = usePortal(undefined, parentRef)
  const popoverRef = useRef(null)
  const popoverBounds = useBounds(popoverRef, parentRef)
  const targetBounds = useBounds(targetRef, parentRef)
  const [currentPosition, setPosition] = useState({
    top: 0,
    left: 0,
    visibility: "hidden",
  })
  useImperativeHandle(forwardedRef, () => ({ ...popoverRef.current }))
  useEffect(() => {
    const newPos = position({
      popover: popoverBounds,
      target: targetBounds,
      parent: parentRef?.current,
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
