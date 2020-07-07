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

function Dialog({ open = false, toggle = noop, id, ...props }) {
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

const DialogTarget = forwardRef(Target)

export { Dialog, DialogTarget }
export { default as Fullscreen } from "./fullscreen"
export { default as Confirmation } from "./confirmation"
