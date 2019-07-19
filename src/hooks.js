import { useRef, useEffect } from "react"

export const usePortal = () => {
  const rootElement = useRef(null)
  if (!rootElement.current) {
    rootElement.current = document.createElement("aside")
  }
  useEffect(() => {
    document.body.appendChild(rootElement.current)
    return () => {
      rootElement.current.remove()
    }
  }, [])
  return rootElement.current
}
