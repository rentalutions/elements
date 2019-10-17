import React, { forwardRef, useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { Calendar as CalendarIcon } from "react-feather"
import PropTypes from "prop-types"
import { colors } from "../constants"
import Input from "../text-input"
import { useObserver } from "../hooks"
import Calendar from "./calendar"

const StyledSearch = styled.div`
  position: relative;
  outline: none;
  .date-search__calendar {
    position: absolute;
    z-index: 10;
    left: 0;
    box-shadow: 0 2rem 2rem -2rem rgba(0, 0, 0, 0.24);
  }
  .calendar-label {
  }
`

const DateSearch = forwardRef((props, ref) => {
  const [focus, setIsFocused] = useState(false)
  const [date, setDate] = useState("")
  const [setTarget, entry] = useObserver()
  const calenderRef = useRef(null)
  const clientBottom =
    entry && entry.boundingClientRect ? entry.boundingClientRect.bottom : 0
  function handleSelect(iso) {
    setDate(iso)
    setIsFocused(false)
  }
  function handleChange(e) {
    setDate(e.target.value)
  }
  useEffect(() => {
    setTarget(calenderRef.current)
  }, [])
  return (
    <StyledSearch tabIndex="-1">
      <Input
        ref={ref}
        icon={CalendarIcon}
        onFocus={e => setIsFocused(true)}
        value={date}
        onChange={handleChange}
        {...props}
      />
      <Calendar
        ref={calenderRef}
        style={{
          display: focus ? "grid" : "none",
          top: clientBottom - window.innerHeight > 0 ? "auto" : "calc(100% + 1rem)",
          bottom: clientBottom - window.innerHeight > 0 ? "calc(100% + 1rem)" : "auto"
        }}
        className="date-search__calendar"
        onSelect={handleSelect}
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

export { Calendar, DateSearch, DatePicker }
