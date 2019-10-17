import React, { forwardRef, useReducer, useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { Calendar as CalendarIcon } from "react-feather"
import PropTypes from "prop-types"
import { colors } from "../constants"
import Input from "../text-input"
import { useDates, usePortal } from "../hooks"

const StyledCalendar = styled.form`
  display: grid;
  grid-template-columns: repeat(7, 2rem);
  grid-auto-rows: 2rem;
  grid-gap: 2rem;
  padding: 2rem;
  background: ${colors.ui_100};
  border: 1px solid ${colors.ui_300};
  text-align: center;
  .previous {
    color: ${colors.ui_500};
  }
`

const Calendar = props => {
  const {
    state: { dates },
    getDates
  } = useDates()
  const days = ["S", "M", "T", "W", "T", "F", "S"]
  function isPast(date, type) {
    const smaller = date <= new Date().getDate()
    return type === "previous" ? true : type === "next" ? false : smaller
  }
  return (
    <StyledCalendar {...props}>
      {days.map((day, idx) => (
        <span key={idx} className="week-days">
          {day}
        </span>
      ))}
      {dates &&
        dates.map(week =>
          week.map(({ date, type }, idx) => (
            <span className={isPast(date, type) ? "previous day" : "day"} key={idx}>
              {date}
            </span>
          ))
        )}
    </StyledCalendar>
  )
}

const StyledSearch = styled.div`
  position: relative;
  outline: none;
`
const DateSearchModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
`

const DateSearch = forwardRef((props, ref) => {
  const [focus, setFocus] = useState(false)
  const target = usePortal()
  return (
    <StyledSearch
      tabIndex="-1"
      onFocus={e => setFocus(true)}
      onBlur={e => setFocus(false)}
    >
      <Input ref={ref} icon={CalendarIcon} {...props} />
      {focus &&
        createPortal(
          <DateSearchModal>
            <Calendar className="date-search__calendar" />
          </DateSearchModal>,
          target
        )}
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
