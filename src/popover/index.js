import React, { useRef, forwardRef, useImperativeHandle } from "react"
import { createPortal } from "react-dom"
import { usePortal, useRect } from "src/hooks"

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

function getPosition(popoverRect, targetRect) {
  if (!popoverRect || !targetRect) return {}
  const { right, up } = getCollisions(popoverRect, targetRect)
  return {
    top: `${
      up
        ? targetRect.top - 12 - popoverRect.height + window.pageYOffset
        : targetRect.top + 12 + targetRect.height + window.pageYOffset
    }px`,
    left: `${
      right
        ? targetRect.right - popoverRect.width + window.pageXOffset
        : targetRect.left + window.pageXOffset
    }px`
  }
}

function PopOver({ targetRef, position = getPosition, style, children, ...rest }, ref) {
  const portalTarget = usePortal()
  const popoverRef = useRef(null)
  const popoverRect = useRect(popoverRef)
  const targetRect = useRect(targetRef)
  useImperativeHandle(ref, () => ({ ...popoverRef.current }))
  const positionStyles = position(popoverRect, targetRect)
  return createPortal(
    <aside
      {...rest}
      ref={popoverRef}
      style={{ ...style, position: "absolute", ...positionStyles }}
    >
      {children}
    </aside>,
    portalTarget
  )
}

export default forwardRef(PopOver)
