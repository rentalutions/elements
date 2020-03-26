import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect
} from "react"
import { createPortal } from "react-dom"
import { usePortal, useWindowResize } from "src/hooks"

export function handlePosition({ popover, target, forceRight = false, forceUp = false }) {
  if (!popover || !target) return null
  const collisions = {
    top: target.top - popover.height < 0,
    right: window.innerWidth < target.left + popover.width,
    bottom: window.innerHeight < target.bottom + popover.height,
    left: target.left - popover.width < 0
  }
  const right = forceRight ? true : collisions.right && !collisions.left
  const up = forceUp ? true : collisions.bottom && !collisions.top
  const top = up
    ? target.top - 12 - popover.height + window.pageYOffset
    : target.top + 12 + target.height + window.pageYOffset
  const left = right
    ? target.right - popover.width + window.pageXOffset
    : target.left + window.pageXOffset
  if (Number.isNaN(top + left)) return { top: 0, left: 0, visibility: "hidden" }
  return {
    visibility: "visible",
    top,
    left
  }
}

function PopOver(
  { targetRef, onPosition = handlePosition, style, children, ...rest },
  ref
) {
  const portal = usePortal()
  const popoverRef = useRef(null)
  const popoverRect = useWindowResize(popoverRef)
  const targetRect = useWindowResize(targetRef)
  const [position, setPosition] = useState({ top: 0, left: 0, visibility: "hidden" })
  useImperativeHandle(ref, () => ({ ...popoverRef.current }))
  useEffect(() => {
    const newPos = onPosition({
      popover: popoverRect,
      target: targetRect
    })
    setPosition(newPos)
  }, [targetRect])
  return createPortal(
    <aside
      {...rest}
      ref={popoverRef}
      style={{ ...style, position: "absolute", ...position }}
    >
      {children}
    </aside>,
    portal
  )
}

export default forwardRef(PopOver)
