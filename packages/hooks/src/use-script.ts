import { useEffect, useState } from "react"

const scriptCache = []

export function useScript(src: string) {
  const [state, setState] = useState({
    loaded: false,
    error: false,
  })
  useEffect(() => {
    function loaded() {
      setState({ loaded: true, error: false })
    }
    function errored({ target }) {
      const index = scriptCache.indexOf(target.src)
      if (index >= 0) scriptCache.splice(index, 1)
      target.remove()
      setState({
        loaded: true,
        error: true,
      })
    }
    if (scriptCache.includes(src)) return loaded()
    scriptCache.push(src)
    const script = document.createElement("script")
    script.src = src
    script.async = true
    script.addEventListener("load", loaded)
    script.addEventListener("error", errored)
    document.body.appendChild(script)
    return () => {
      script.removeEventListener("load", loaded)
      script.removeEventListener("error", errored)
    }
  }, [src])
  return state
}
