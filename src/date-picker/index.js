import React, { forwardRef, useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "react-feather"
import PropTypes from "prop-types"
import { colors } from "../constants"
import Input from "../text-input"
import { useDates, useObserver } from "../hooks"

const StyledCalendar = styled.form`
  display: grid;
  grid-template-columns: repeat(7, 2rem);
  /* grid-auto-rows: 2rem; */
  grid-gap: 1rem 2rem;
  padding: 2rem;
  background: ${colors.ui_100};
  border: 1px solid ${colors.ui_500};
  border-radius: 4px;
  span {
    line-height: 2rem;
    vertical-align: middle;
  }
  .current-month,
  .current-year {
    font-weight: 700;
  }
  .current-month {
    grid-column: span 4;
    text-align: left;
  }
  .current-year {
    grid-column: span 3;
    text-align: right;
  }
  .week-days,
  .date {
    text-align: center;
  }
  .week-days {
    margin-bottom: 1rem;
  }
  .previous {
    color: ${colors.ui_500};
  }
  .actions {
    grid-column: span 7;
    text-align: right;
    svg:first-of-type {
      margin-right: 2rem;
    }
  }
`

export const Calendar = forwardRef(
  ({ currentMonth = new Date(), allowPast = false, ...props }, ref) => {
    const {
      state: { dates, month, monthName, year },
      getDates
    } = useDates(currentMonth)
    const days = ["S", "M", "T", "W", "T", "F", "S"]
    function isPast(date, type) {
      if (allowPast) return false
      const smaller = date <= new Date().getDate()
      return type === "previous" ? true : type === "next" ? false : smaller
    }
    return (
      <StyledCalendar {...props} ref={ref}>
        <span className="current-month">{monthName}</span>
        <span className="current-year">{year}</span>
        {days.map((day, idx) => (
          <span key={idx} className="week-days">
            {day}
          </span>
        ))}
        {dates &&
          dates.map(week =>
            week.map(({ date, type }, idx) => (
              <span className={isPast(date, type) ? "previous date" : "date"} key={idx}>
                {date}
              </span>
            ))
          )}
        <span className="actions">
          <ChevronLeft />
          <ChevronRight />
        </span>
      </StyledCalendar>
    )
  }
)

Calendar.propTypes = {
  currentMonth: PropTypes.instanceOf(Date),
  allowPast: PropTypes.bool
}

const StyledSearch = styled.div`
  position: relative;
  outline: none;
  .date-search__calendar {
    position: absolute;
    z-index: 10;
    left: 0;
    box-shadow: 0 2rem 2rem -2rem rgba(0, 0, 0, 0.24);
  }
`

const DateSearch = forwardRef((props, ref) => {
  const [focus, setFocus] = useState(false)
  const [setTarget, entry] = useObserver()
  const calenderRef = useRef(null)
  const clientBottom =
    entry && entry.boundingClientRect ? entry.boundingClientRect.bottom : 0
  useEffect(() => {
    setTarget(calenderRef.current)
  }, [])
  return (
    <StyledSearch
      tabIndex="-1"
      onFocus={e => setFocus(true)}
      onBlur={e => setFocus(false)}
    >
      <Input ref={ref} icon={CalendarIcon} {...props} />
      <Calendar
        ref={calenderRef}
        style={{
          display: focus ? "grid" : "none",
          top: clientBottom - window.innerHeight > 0 ? "auto" : "calc(100% + 1rem)",
          bottom: clientBottom - window.innerHeight > 0 ? "calc(100% + 1rem)" : "auto"
        }}
        className="date-search__calendar"
      />
    </StyledSearch>
  )
})

const DatePicker = forwardRef((props, ref) => {
  return (
    <label ref={ref} {...props}>
      date picker
    </label>
  )
})

export { DateSearch, DatePicker }
