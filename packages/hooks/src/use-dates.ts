import CalendarDates from "calendar-dates"
import { useCallback, useEffect, useReducer, useRef } from "react"

interface UseDatesOptions {
  initialDate?: Date
  excludeDates?: Date[]
}

type UseDatesAction = Partial<UseDatesState>

type DateObject = {
  date: number
  iso: string
  type: "previous" | "current" | "next"
}

type UseDatesState = {
  dates: DateObject[][] | null
  currentDate: Date
}

interface UseDatesReturn extends UseDatesState {
  getNextMonth: () => void
  getPreviousMonth: () => void
  setDate: (date: Date) => void
}

function datesReducer(state: UseDatesState, action: UseDatesAction) {
  return { ...state, ...action }
}

export function useDates({ initialDate }: UseDatesOptions): UseDatesReturn {
  const { current: dateService } = useRef(new CalendarDates())
  const [state, dispatch] = useReducer(datesReducer, {
    dates: null,
    currentDate: initialDate,
  })
  useEffect(() => {
    let mounted = true
    async function getCalendar(date: Date) {
      const dates = await dateService.getMatrix(new Date(date))
      dispatch({ dates })
    }
    mounted && getCalendar(state.currentDate)
    return () => {
      mounted = false
    }
  }, [])
  async function changeMonth(direction: 1 | -1) {
    const newStartDate = new Date(
      state.currentDate.getFullYear(),
      state.currentDate.getMonth() + direction,
      1
    )
    const newDates = await dateService.getMatrix(new Date(newStartDate))
    dispatch({
      dates: newDates,
      currentDate: newStartDate,
    })
  }

  return {
    ...state,
    setDate(date: Date) {
      dispatch({ currentDate: date })
    },
    getNextMonth() {
      changeMonth(1)
    },
    getPreviousMonth() {
      changeMonth(-1)
    },
  }
}
