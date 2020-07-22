import React, {
  createContext,
  cloneElement,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
} from "react"
import { noop } from "@rent_avail/utils"

export const DialogContext = createContext()

export function Dialog({ open = false, toggle = noop, id, ...props }) {
  const context = useMemo(() => ({ open, toggle, id }), [open, toggle, id])
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "initial"
    return () => (document.body.style.overflow = "initial")
  }, [open])
  return <DialogContext.Provider {...props} value={context} />
}

function Target({ children, ...props }, ref) {
  const { id, open } = useContext(DialogContext)
  return cloneElement(children, { ...props, ref, id, open })
}

export const DialogTarget = forwardRef(Target)
