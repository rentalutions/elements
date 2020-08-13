import React from "react"
import { usePortal } from "./src"
import { createPortal } from "react-dom"

export default { title: "Utilities" }

export function UsePortal() {
  const target = usePortal()
  return createPortal(<div>Hello World</div>, target)
}
