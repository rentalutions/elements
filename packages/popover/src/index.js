import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  memo,
} from "react"
import { createPortal } from "react-dom"
import { usePortal, useWindowResize } from "@rent_avail/hooks"

export function getPosition({ popover, target }) {
  if (!popover || !target) return null
  const collisions = {
    top: target.top - popover.height < 0,
    right: window.innerWidth < target.left + popover.width,
    bottom: window.innerHeight < target.bottom + popover.height,
    left: target.left - popover.width < 0,
  }
  const rightCollision = collisions.right && !collisions.left
  const topCollision = collisions.bottom && !collisions.top
  const alignTop = target.top - 12 - popover.height + window.pageYOffset
  const alignBottom = target.top + 12 + target.height + window.pageYOffset
  const alignRight = target.right - popover.width + window.pageXOffset
  const alignLeft = target.left + window.pageXOffset
  const top = topCollision ? alignTop : alignBottom
  const left = rightCollision ? alignRight : alignLeft
  if (Number.isNaN(top + left)) return { top: 0, left: 0, visibility: "hidden" }
  return {
    visibility: "visible",
    top,
    left,
  }
}

function PopOver(
  { targetRef, position = getPosition, style, children, ...rest },
  ref
) {
  const portal = usePortal()
  const popoverRef = useRef(null)
  const popoverRect = useWindowResize(popoverRef)
  const targetRect = useWindowResize(targetRef)
  const [currentPosition, setPosition] = useState({
    top: 0,
    left: 0,
    visibility: "hidden",
  })
  useImperativeHandle(ref, () => ({ ...popoverRef.current }))
  useEffect(() => {
    const newPos = position({
      popover: popoverRect,
      target: targetRect,
    })
    setPosition(newPos)
  }, [targetRect])
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
}

export default memo(forwardRef(PopOver))
