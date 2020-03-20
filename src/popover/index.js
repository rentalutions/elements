import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect
} from "react"
import { createPortal } from "react-dom"
import { usePortal, useWindowResize } from "src/hooks"

function getCollisions(popoverRect, targetRect, offsetLeft = 0, offsetBottom = 0) {
  const collisions = {
    top: targetRect.top - popoverRect.height < 0,
    right: window.innerWidth < targetRect.left + popoverRect.width - offsetLeft,
    bottom: window.innerHeight < targetRect.bottom + popoverRect.height - offsetBottom,
    left: targetRect.left - popoverRect.width < 0
  }
  const right = collisions.right && !collisions.left
  const up = collisions.bottom && !collisions.top
  return { right, up }
}

function calculate(popoverRect, targetRect) {
  if (!popoverRect || !targetRect) return null
  const { right, up } = getCollisions(popoverRect, targetRect)
  const top = up
    ? targetRect.top - 12 - popoverRect.height + window.pageYOffset
    : targetRect.top + 12 + targetRect.height + window.pageYOffset
  const left = right
    ? targetRect.right - popoverRect.width + window.pageXOffset
    : targetRect.left + window.pageXOffset
  if (isNaN(top) || isNaN(left)) return { top: 0, left: 0, visibility: "hidden" }
  return {
    visibility: "visible",
    top,
    left
  }
}

function PopOver({ targetRef, getPosition = calculate, style, children, ...rest }, ref) {
  const portalTarget = usePortal()
  const popoverRef = useRef(null)
  const popoverRect = useWindowResize(popoverRef)
  const targetRect = useWindowResize(targetRef)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  useImperativeHandle(ref, () => ({ ...popoverRef.current }))
  useEffect(() => {
    setPosition(getPosition(popoverRect, targetRect))
  }, [targetRect])
  return createPortal(
    <aside
      {...rest}
      ref={popoverRef}
      style={{ ...style, position: "absolute", ...position }}
    >
      {children}
    </aside>,
    portalTarget
  )
}

export default forwardRef(PopOver)
