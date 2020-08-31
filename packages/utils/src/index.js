import { useRef, useEffect, useState, useReducer } from "react"
import ResizeObserver from "resize-observer-polyfill"
import "intersection-observer"
import CalendarDates from "calendar-dates"

export function useRect(ref) {
  const [rect, setRect] = useState(null)
  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [ref])
  return rect
}

export function useWindowResize(ref, parent) {
  const [size, setSize] = useState({})
  useEffect(() => {
    function handleResize() {
      if (!ref.current) return false
      const childRect = ref.current.getBoundingClientRect()
      const parentRect = parent?.getBoundingClientRect() || {
        x: 0,
        y: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }
      setSize({
        x: childRect.x - parentRect.x,
        y: childRect.y - parentRect.y,
        top: childRect.top - parentRect.top,
        left: childRect.left - parentRect.left,
        right: childRect.x - parentRect.x + childRect.width,
        bottom: childRect.y - parentRect.y + childRect.height,
        width: childRect.width,
        height: childRect.height,
      })
    }
    let resizeObserver = new ResizeObserver(() => handleResize())
    resizeObserver.observe(ref.current)
    window.addEventListener("resize", () => handleResize())
    handleResize() // has to be called synchronously once to avoid weird timing issues in Popover
    return () => {
      window.removeEventListener("resize", () => handleResize())
      if (!resizeObserver) {
        return
      }
      resizeObserver.disconnect()
      resizeObserver = null
    }
  }, [ref.current])
  return size
}

export function useResize(optionalRef) {
  const ref = useRef(null)
  const [rect, set] = useState({
    x: 0,
    y: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: 0,
    width: 0,
  })
  // if (typeof window === "undefined") return [ref, bounds] // bail on server render.
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  )
  useEffect(() => {
    if (optionalRef?.current) ref.current = optionalRef.current
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [optionalRef?.current])
  return [ref, rect]
}

export function useIntersection({
  root = null,
  rootMargin,
  threshold = 0,
} = {}) {
  const [result, setResult] = useState({})
  const target = useRef()
  const observer = useRef(null)
  useEffect(() => {
    if (observer.current) observer.current.disconnect()
    if (typeof window !== "undefined") {
      observer.current = new IntersectionObserver(
        ([entry]) => setResult(entry),
        {
          root,
          rootMargin,
          threshold,
        }
      )
    }
    if (target.current) observer.current.observe(target.current)
    return () => observer.current.disconnect()
  }, [target])
  return [target, result]
}

export function usePortal(type = "avail-portal", parent) {
  if (typeof window === "undefined") return null // bail on server render.
  const rootElement = useRef()
  if (!rootElement.current) {
    rootElement.current = document.createElement(type)
  }
  useEffect(() => {
    const mountRoot = parent || document.body
    mountRoot.appendChild(rootElement.current)
    return () => {
      if (mountRoot.contains(rootElement.current)) {
        mountRoot.removeChild(rootElement.current)
      }
    }
  }, [rootElement.current, parent])
  return rootElement.current
}

// export function usePortalNew(type = "avail-portal") {
//   if (typeof window === "undefined") return null // bail on server render.
//   const rootElement = useRef()
//   const mountNode = useRef()
//   if (!rootElement.current) {
//     rootElement.current = document.createElement(type)
//   }
//   useEffect(() => {
//     document.body.appendChild(rootElement.current)
//     return () => {
//       document.body.removeChild(rootElement.current)
//     }
//   }, [rootElement.current])
//   function create(element) {
//     return mountNode.current ? (
//       createPortal(element, rootElement.current)
//     ) : (
//       <span ref={mountNode} />
//     )
//   }
//   return create
// }

const GET_DATES = "avail/actions/GET_DATES"
const UPDATE_DATES = "avail/actions/UPDATE_DATES"

const dateReducer = (state, action) => {
  switch (action.type) {
    case GET_DATES: {
      const { payload } = action
      return {
        ...state,
        dates: payload,
      }
    }
    case UPDATE_DATES: {
      const { payload } = action
      return {
        ...state,
        ...payload,
      }
    }
    default:
      throw Error("DATE REDUCER: Dispatch a known action.")
  }
}

const scriptCache = []

export function useScript(src) {
  const [state, setState] = useState({
    loaded: false,
    error: false,
  })
  useEffect(() => {
    function scriptLoaded() {
      setState({
        loaded: true,
        error: false,
      })
    }
    function scriptErrored({ target }) {
      const index = scriptCache.indexOf(target.src)
      if (index >= 0) scriptCache.splice(index, 1)
      target.remove()
      setState({
        loaded: true,
        error: true,
      })
    }
    if (scriptCache.includes(src)) {
      scriptLoaded()
    } else {
      scriptCache.push(src)
      const script = document.createElement("script")
      script.src = src
      script.async = true
      script.addEventListener("load", scriptLoaded)
      script.addEventListener("error", scriptErrored)
      document.body.appendChild(script)
      return () => {
        script.removeEventListener("load", scriptLoaded)
        script.removeEventListener("error", scriptErrored)
      }
    }
  }, [src])
  return state
}

export function useDates(startDate = new Date()) {
  const calendarDates = useRef(new CalendarDates())
  const [state, dispatch] = useReducer(dateReducer, {
    dates: null,
    month: startDate.getMonth(),
    monthName: startDate.toLocaleString(navigator.language, { month: "long" }),
    year: startDate.getFullYear(),
  })

  async function getDates() {
    const dates = await calendarDates.current.getMatrix(startDate)
    dispatch({
      type: GET_DATES,
      payload: dates,
    })
  }

  async function getNextMonth() {
    const month = (state.month + 1) % 12
    const year = (state.month + 1) % 12 === 0 ? state.year + 1 : state.year
    const newDate = new Date(year, month)
    const dates = await calendarDates.current.getMatrix(newDate)
    dispatch({
      type: UPDATE_DATES,
      payload: {
        dates,
        month: newDate.getMonth(),
        monthName: newDate.toLocaleString(navigator.language, {
          month: "long",
        }),
        year: newDate.getFullYear(),
      },
    })
  }

  async function getPrevMonth() {
    const month = state.month - 1 < 0 ? 12 : state.month - 1
    const year = state.month - 1 < 0 ? state.year - 1 : state.year
    const newDate = new Date(year, month)
    const dates = await calendarDates.current.getMatrix(newDate)
    dispatch({
      type: UPDATE_DATES,
      payload: {
        dates,
        month: newDate.getMonth(),
        monthName: newDate.toLocaleString(navigator.language, {
          month: "long",
        }),
        year: newDate.getFullYear(),
      },
    })
  }

  useEffect(() => {
    let mounted = true
    if (mounted) getDates(state.year, state.month)
    return () => {
      mounted = false
    }
  }, [])
  return {
    state,
    getNextMonth,
    getPrevMonth,
  }
}

export function throttle(fn, ms) {
  let timeout
  function exec() {
    fn.apply()
  }
  function clear() {
    return timeout === "undefined" ? null : clearTimeout(timeout)
  }
  if (fn !== undefined && ms !== undefined) {
    timeout = setTimeout(exec, ms)
  } else {
    console.error("callback function and the timeout must be supplied")
  }
  // API to clear the timeout
  throttle.clearTimeout = clear()
}

export function wrapEvent(original, additional) {
  return (event) => {
    if (original) original(event)
    if (!event.defaultPrevented) return additional(event)
  }
}

export function isScrollable(node) {
  const regex = /(auto|scroll)/
  const style = getComputedStyle(node, null)
  return regex.test(style.overflow + style.overflowY)
}

export function closestScrollable(element) {
  let parent = element
  while (parent.parentElement) {
    parent = parent.parentElement
    if (isScrollable(parent)) return parent
  }
  return document.body
}

export function noop() {}
