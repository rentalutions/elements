import {
  useRef, useEffect, useState, useReducer
} from "react"
import ResizeObserver from "resize-observer-polyfill"
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

export function usePortal() {
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

const dateReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATES":
      return { ...state, dates: action.payload }
    default:
      throw Error("DATE REDUCER: Dispatch a known action.")
  }
}

export function useDates() {
  const datesRef = useRef(new CalendarDates())
  const date = new Date()
  const year = date.getFullYear()
  const monthNum = date.getMonth()
  const month = date.toLocaleString("default", { month: "long" })
  const [state, dispatch] = useReducer(dateReducer, {
    month,
    dates: null
  })
  const getDates = async () => {
    const dates = await datesRef.current.getMatrix(new Date(year, monthNum))
    dispatch({ type: "GET_DATES", payload: dates })
  }
  useEffect(() => {
    let canceled = false
    if (!canceled) getDates()
    return () => {
      canceled = true
    }
  }, [datesRef.current])
  return state
}
