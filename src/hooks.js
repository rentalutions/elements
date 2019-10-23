import { useRef, useEffect, useState, useReducer } from "react"
import ResizeObserver from "resize-observer-polyfill"
import IntersectionObserver from "intersection-observer-polyfill"
import CalendarDates from "calendar-dates"

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

export function useObserver({ root = null, rootMargin, threshold = 0 } = {}) {
  const [entry, setEntry] = useState({})
  const [target, setTarget] = useState(null)
  const observer = useRef(null)
  useEffect(() => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(([entry]) => setEntry(entry), {
      root,
      rootMargin,
      threshold
    })
    if (target) observer.current.observe(target)
    return () => observer.current.disconnect()
  }, [target])
  return [setTarget, entry]
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
