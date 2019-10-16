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

const dateReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATES": {
      const {
        payload: {
          monthName, monthNum, dates, fullYear
        }
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

export function useDates() {
  const datesRef = useRef(new CalendarDates())
  const date = new Date()
  const monthName = date.toLocaleString(navigator.language, { month: "long" })

  const [state, dispatch] = useReducer(dateReducer, {
    monthName,
    dates: null,
    monthNum: date.getMonth(),
    fullYear: date.getFullYear()
  })

  async function getDates(change) {
    const newDate = new Date(state.fullYear, state.monthNum + change)
    const calendarDates = await datesRef.current.getMatrix(newDate)
    dispatch({
      type: "GET_DATES",
      payload: {
        dates: calendarDates,
        monthName: newDate.toLocaleString(navigator.language, {
          month: "long"
        }),
        monthNum: newDate.getMonth(),
        fullYear: newDate.getFullYear()
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
