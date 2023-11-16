import { useRef, useEffect } from "react"

interface PortalParams {
  parent?: HTMLElement
  type?: string
}

export function usePortal({ type = "portal", parent }: PortalParams = {}) {
  if (typeof window === "undefined") return null // bail on server render.
  const mountRef = useRef<HTMLElement | null>(null)
  if (!mountRef.current) {
    mountRef.current = document.createElement(type)
  }
  useEffect(() => {
    const root = parent ?? document.body
    root.appendChild(mountRef.current)
    return () => {
      if (root.contains(mountRef.current)) {
        root.removeChild(mountRef.current)
      }
    }
  }, [mountRef.current])
  return mountRef.current
}
