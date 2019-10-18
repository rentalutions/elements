import React, { forwardRef } from "react"
import styled from "styled-components"
import { ChevronLeft, ChevronRight } from "react-feather"
import PropTypes from "prop-types"
import { colors } from "../constants"
import { useDates } from "../hooks"

const StyledCalendar = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0 1rem;
  padding: 2rem 1.5rem;
  background: ${colors.ui_100};
  border: 1px solid ${colors.ui_500};
  border-radius: 4px;
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
    padding: 0 0.5rem;
  }
  .week-days {
    margin: 1rem 0;
    color: ${colors.ui_700};
  }
  .date {
    all: unset;
    cursor: pointer;
    border-radius: 4px;
    transition: 200ms;
    &:hover {
      background: ${colors.blue_100};
    }
  }
  .week-days,
  .date {
    text-align: center;
    width: 3rem;
    height: 3rem;
  }
  .previous {
    color: ${colors.ui_500};
  }
  .actions {
    grid-column: span 7;
    text-align: right;
    padding: 1rem 0.5rem 0;
    svg {
      cursor: pointer;
      transition: 200ms;
      &:hover {
        color: ${colors.blue_300};
      }
    }
    svg:first-of-type {
      margin-right: 2rem;
    }
  }
`

const Calendar = forwardRef(
  ({ startDate = new Date(), allowPast = false, onSelect, ...props }, ref) => {
    const {
      state: { dates, month, monthName, year },
      getNextMonth,
      getPrevMonth
    } = useDates(startDate)
    const days = ["S", "M", "T", "W", "T", "F", "S"]
    function isPast(iso) {
      if (allowPast) return false
      return Date.now() > new Date(iso)
    }
    function handleSelect(eventDate) {
      if (onSelect) onSelect(eventDate)
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
