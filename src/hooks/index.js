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

export function useWindowResize(ref) {
  const [size, setSize] = useState({})
  useEffect(() => {
    function handleResize() {
      if (!ref.current) return false
      setSize(ref.current.getBoundingClientRect())
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return size
}

export function useResize() {
  const ref = useRef(null)
  const [bounds, set] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  })
  // if (typeof window === "undefined") return [ref, bounds] // bail on server render.
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])
  return [ref, bounds]
}

export function useIntersection({ root = null, rootMargin, threshold = 0 } = {}) {
  const [result, setResult] = useState({})
  const target = useRef()
  const observer = useRef(null)
  useEffect(() => {
    if (observer.current) observer.current.disconnect()
    if (typeof window !== "undefined") {
      observer.current = new IntersectionObserver(([entry]) => setResult(entry), {
        root,
        rootMargin,
        threshold
      })
    }
    if (target.current) observer.current.observe(target.current)
    return () => observer.current.disconnect()
  }, [target])
  return [target, result]
}

export function usePortal() {
  if (typeof window === "undefined") return null // bail on server render.
  const rootElement = useRef(null)
  if (!rootElement.current) {
    rootElement.current = document.createElement("aside")
  }
  useEffect(() => {
    document.body.appendChild(rootElement.current)
    return () => {
      document.body.removeChild(rootElement.current)
    }
  }, [rootElement.current])
  return rootElement.current
}

const GET_DATES = "avail/actions/GET_DATES"
const UPDATE_DATES = "avail/actions/UPDATE_DATES"

const dateReducer = (state, action) => {
  switch (action.type) {
    case GET_DATES: {
      const { payload } = action
      return {
        ...state,
        dates: payload
      }
    }
    case UPDATE_DATES: {
      const { payload } = action
      return {
        ...state,
        ...payload
      }
    }
    default:
      throw Error("DATE REDUCER: Dispatch a known action.")
  }
}

export function useDates(startDate = new Date()) {
  const calendarDates = useRef(new CalendarDates())
  const [state, dispatch] = useReducer(dateReducer, {
    dates: null,
    month: startDate.getMonth(),
    monthName: startDate.toLocaleString(navigator.language, { month: "long" }),
    year: startDate.getFullYear()
  })

  async function getDates() {
    const dates = await calendarDates.current.getMatrix(startDate)
    dispatch({
      type: GET_DATES,
      payload: dates
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
        monthName: newDate.toLocaleString(navigator.language, { month: "long" }),
        year: newDate.getFullYear()
      }
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
        monthName: newDate.toLocaleString(navigator.language, { month: "long" }),
        year: newDate.getFullYear()
      }
    })
  }

  useEffect(() => {
    let canceled = false
    if (!canceled) getDates(state.year, state.month)
    return () => {
      canceled = true
    }
  }, [])
  return {
    state,
    getNextMonth,
    getPrevMonth
  }
}
