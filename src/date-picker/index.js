import React, { forwardRef, useReducer, useState } from "react"
import styled from "styled-components"
import { Calendar as CalendarIcon } from "react-feather"
import PropTypes from "prop-types"
import { colors } from "../constants"
import { useDates } from "../hooks"
import Input from "../text-input"

const StyledDatePicker = styled.fieldset`
  all: unset;
  position: relative;
  .date-picker__label {
    display: block;
    margin-bottom: 0.5rem;
  }
  .date-picker__input {
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;
  }
  .wrapper {
    display: inline-flex;
    flex-wrap: nowrap;
  }
  .month,
  .day {
    width: 7rem;
  }
  .year {
    width: 10rem;
  }
`

const DatePickerInput = styled.input`
  all: unset;
  box-sizing: border-box;
  padding: 1rem;
  background: ${({ hasValue }) => (hasValue ? colors.blue_300 : colors.blue_100)};
  border-radius: 4px;
  color: ${colors.ui_100};
  font-weight: 700;
  &:focus {
    background: ${colors.blue_300};
  }
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
  &::placeholder {
    color: ${colors.ui_500};
    font-weight: 400;
  }
`

const pickerReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, [action.name]: action.value }
    default:
      throw Error("PICKER REDUCER: must dispatch known action.")
  }
}

export const DatePicker = forwardRef(({ label, onBlur, ...props }, ref) => {
  const [state, dispatch] = useReducer(pickerReducer, {
    month: "",
    day: "",
    year: "",
    id: `date-picker-${Math.random()}`
  })
  function handleChange(event) {
    const { target } = event
    dispatch({ type: "UPDATE", name: target.name, value: target.value })
    if (target.value.length === target.maxLength) {
      if (target.nextElementSibling) {
        target.nextElementSibling.focus()
      } else {
        if (onBlur) onBlur(event, new Date(state.year, state.month - 1, state.day))
        target.blur()
      }
    }
  }
  return (
    <StyledDatePicker {...props} ref={ref}>
      <label htmlFor={state.id}>
        <input type="date" id={state.id} className="date-picker__input" />
        {label && <span className="date-picker__label">{label}</span>}
      </label>
      <div className="wrapper">
        <DatePickerInput
          hasValue={!!state.month.length}
          type="num"
          className="month"
          placeholder="MM"
          value={state.month}
          name="month"
          onChange={handleChange}
          pattern="[0-9]{1,2}"
          maxLength="2"
        />
        <DatePickerInput
          hasValue={!!state.day.length}
          type="num"
          className="day"
          placeholder="DD"
          value={state.day}
          name="day"
          onChange={handleChange}
          pattern="[0-9]{1,2}"
          maxLength="2"
        />
        <DatePickerInput
          hasValue={!!state.year.length}
          type="num"
          className="year"
          placeholder="YYYY"
          name="year"
          value={state.year}
          onChange={handleChange}
          pattern="[0-9]{1,4}"
          maxLength="4"
        />
      </div>
    </StyledDatePicker>
  )
})

DatePicker.propTypes = {
  label: PropTypes.string,
  onBlur: PropTypes.func
}

DatePicker.defaultProps = {
  label: null,
  onBlur: () => null
}

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
  const [dates] = useDates()
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

const StyledDateSearch = styled.div`
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

export const DateSearch = forwardRef(({ label, ...props }, ref) => {
  const [showCalendar, set] = useState(false)
  return (
    <StyledDateSearch
      {...props}
      tabIndex="-1"
      isOpen={showCalendar}
      onFocus={() => set(true)}
      onBlur={() => set(false)}
    >
      <Input icon={CalendarIcon} ref={ref} label={label} />
      {showCalendar && <Calendar className="date-picker__calendar" />}
    </StyledDateSearch>
  )
})

DateSearch.defaultProps = {
  label: null
}

DateSearch.propTypes = {
  label: PropTypes.string
}
