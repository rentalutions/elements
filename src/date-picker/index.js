import React, { forwardRef, useState } from "react"
import styled from "styled-components"
import { Calendar as CalendarIcon } from "react-feather"
import PropTypes from "prop-types"
import Input from "../text-input"
import { colors } from "../constants"
import { useDates } from "../hooks"

const StyledCalendar = styled.section`
  padding: 2rem;
  background: ${colors.ui_100};
  border: 2px solid ${colors.ui_500};
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(7, minmax(min-content, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  .day {
    text-align: center;
  }
  .date {
    text-align: right;
  }
  .month,
  .year {
    font-weight: 700;
  }
  .day {
    margin-bottom: 1rem;
  }
  .month {
    grid-column: span 4;
  }
  .year {
    grid-column: span 3;
    text-align: right;
  }
  .previous {
    color: ${colors.ui_500};
  }
`

function Calendar({ ...props }) {
  const days = ["S", "M", "T", "W", "T", "F", "S"]
  const dates = useDates()
  return (
    dates.dates && (
      <StyledCalendar {...props}>
        <span className="month">{dates.month}</span>
        <span className="year">2019</span>
        {days.map((day, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <span className="day" key={`${idx}-day`}>
            {day}
          </span>
        ))}
        {dates.dates.map(row => row.map(({ date, iso, type }) => (
          <span key={iso} className={`date ${type === "previous" && "previous"}`}>
            {date}
          </span>
        )))}
      </StyledCalendar>
    )
  )
}

const StyledDatePicker = styled.div`
  position: relative;
  display: inline-block;
  outline: none;
  .date-picker__calendar {
    position: absolute;
    top: calc(100% + 1rem);
    min-width: 100%;
    z-index: 1000;
  }
`

const DatePicker = forwardRef(({ label, ...props }, ref) => {
  const [showCalendar, set] = useState(false)
  return (
    <StyledDatePicker
      {...props}
      tabIndex="-1"
      isOpen={showCalendar}
      onFocus={() => set(true)}
      onBlur={() => set(false)}
    >
      <Input icon={CalendarIcon} ref={ref} label={label} />
      {showCalendar && <Calendar className="date-picker__calendar" />}
    </StyledDatePicker>
  )
})

DatePicker.propTypes = {
  label: PropTypes.string.isRequired
}

export default DatePicker
