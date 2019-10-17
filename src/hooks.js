import { useRef, useEffect, useState, useReducer } from "react"
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

const NEW_DATES = "avail/actions/GET_DATES"

const dateReducer = (state, action) => {
  switch (action.type) {
    case NEW_DATES: {
      const {
        payload: { monthName, monthNum, dates, fullYear }
      } = action
      return {
        ...state,
        monthName,
        monthNum,
        dates,
        fullYear
      }
    }
    default:
      throw Error("DATE REDUCER: Dispatch a known action.")
  }
}

export function useDates(startDate) {
  const datesRef = useRef(new CalendarDates())
  const date = startDate ? new Date(startDate) : new Date()
  const [state, dispatch] = useReducer(dateReducer, {
    dates: null,
    month: date.getMonth(),
    monthName: date.toLocaleString(navigator.language, { month: "long" }),
    year: date.getFullYear()
  })

  async function getDates(change) {
    const newDate = new Date(state.year, state.month + change)
    const calendarDates = await datesRef.current.getMatrix(newDate)
    dispatch({
      type: NEW_DATES,
      payload: {
        dates: calendarDates,
        monthName: newDate.toLocaleString(navigator.language, {
          month: "long"
        }),
        month: newDate.getMonth(),
        year: newDate.getFullYear()
      }
    })
  }

  useEffect(() => {
    let canceled = false
    if (!canceled) getDates(0)
    return () => {
      canceled = true
    }
  }, [])
  return {
    state,
    getDates
  }
}
