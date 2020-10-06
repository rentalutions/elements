import React, {
  createContext,
  cloneElement,
  forwardRef,
  useContext,
  useMemo,
  useLayoutEffect,
} from "react"
import { noop } from "@rent_avail/utils"
import { useBodyScrollLock } from "@rent_avail/utils/src"

export const DialogContext = createContext()

export function Dialog({ open = false, toggle = noop, id, ...props }) {
  const context = useMemo(() => ({ open, toggle, id }), [open, toggle, id])
  const [lockBodyScroll, unlockBodyScroll] = useBodyScrollLock()
  useLayoutEffect(() => {
    if (open) lockBodyScroll()
    else unlockBodyScroll()
    return () => unlockBodyScroll()
  }, [open])
  return <DialogContext.Provider {...props} value={context} />
}

function Target({ children, ...props }, ref) {
  const { id, open } = useContext(DialogContext)
  return cloneElement(children, { ...props, ref, id, open })
}

export const DialogTarget = forwardRef(Target)
