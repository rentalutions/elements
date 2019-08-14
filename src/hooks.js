import { useRef, useEffect, useState } from "react"
import ResizeObserver from "resize-observer-polyfill"

export function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  })
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  // eslint-disable-next-line no-sequences
  useEffect(() => (ro.observe(ref.current), ro.disconnect), [])
  return [{ ref }, bounds]
}

export function usePortal() {
  if (typeof window === "undefined") return null // Don't bother if we're on the server.
  const rootElement = useRef(null)
  if (!rootElement.current) {
    rootElement.current = document.createElement("aside")
  }
  useEffect(() => {
    document.body.appendChild(rootElement.current)
    return () => {
      rootElement.current.remove()
    }
  }, [rootElement.current])
  return rootElement.current
}
