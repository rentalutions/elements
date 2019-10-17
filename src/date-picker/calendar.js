import React, { forwardRef } from "react"
import styled from "styled-components"
import { ChevronLeft, ChevronRight } from "react-feather"
import PropTypes from "prop-types"
import { colors } from "../constants"
import { useDates } from "../hooks"

const StyledCalendar = styled.section`
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
  .current-month {
    grid-column: span 4;
    text-align: left;
  }
  .current-year {
    grid-column: span 3;
    text-align: right;
  }
  .current-month,
  .current-year {
    font-weight: 700;
  }
  .week-days {
    margin-bottom: 1rem;
  }
  .date {
    all: unset;
    &:hover {
      background: ${colors.blue_100};
    }
  }
  .week-days,
  .date {
    text-align: center;
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

const Calendar = forwardRef(
  ({ currentMonth = new Date(), allowPast = false, onSelect, ...props }, ref) => {
    const {
      state: { dates, month, monthName, year },
      getNextMonth,
      getPrevMonth
    } = useDates(currentMonth)
    const days = ["S", "M", "T", "W", "T", "F", "S"]
    function isPast(iso) {
      if (allowPast) return false
      return Date.now() > new Date(iso)
    }
    function handleSelect(evt, eventDate) {
      if (onSelect) onSelect(evt, eventDate)
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
            week.map(({ date, iso }, idx) => (
              <button
                className={isPast(iso) ? "previous date" : "date"}
                disabled={isPast(iso)}
                key={idx}
                onClick={evt => handleSelect(iso)}
              >
                {date}
              </button>
            ))
          )}
        <span className="actions">
          <ChevronLeft onClick={e => getPrevMonth()} />
          <ChevronRight onClick={e => getNextMonth()} />
        </span>
      </StyledCalendar>
    )
  }
)

Calendar.propTypes = {
  currentMonth: PropTypes.instanceOf(Date),
  allowPast: PropTypes.bool
}

export default Calendar
