import React from "react"
import { usePortal, useMediaQuery } from "./src"
import { createPortal } from "react-dom"

export default { title: "Packages/Utilities" }

export function UsePortal() {
  const target = usePortal()
  return createPortal(<div>Hello World</div>, target)
}

export function UseMediaQuery() {
  const visible = useMediaQuery({ max: 600 })
  return <div>{visible ? "visible" : "not shown"}</div>
}
