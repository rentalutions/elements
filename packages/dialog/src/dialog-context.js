import React, {
  createContext,
  cloneElement,
  forwardRef,
  useContext,
  useMemo,
  useLayoutEffect,
} from "react"
import { noop, useBodyScrollLock } from "@rent_avail/utils"

export const DialogContext = createContext()

export function Dialog({ open = false, toggle = noop, id, ...props }) {
  const [lockBodyScroll, unlockBodyScroll] = useBodyScrollLock()
  useLayoutEffect(() => {
    if (open) lockBodyScroll()
    else unlockBodyScroll()
    return () => unlockBodyScroll()
  }, [open])
  return <DialogContext.Provider {...props} value={{ open, toggle, id }} />
}

function Target({ children, ...props }, ref) {
  const { id, open } = useContext(DialogContext)
  return cloneElement(children, { ...props, ref, id, open })
}

export const DialogTarget = forwardRef(Target)
