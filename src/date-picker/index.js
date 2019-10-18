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
  z-index: 10;
  .date-search__calendar {
    position: absolute;
    z-index: 10;
    left: 0;
    box-shadow: 0 2rem 2rem -2rem rgba(0, 0, 0, 0.24);
  }
  .scrim {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.75);
  }
`

const DateSearch = forwardRef(({ onChange, onSelect, ...props }, ref) => {
  const [focus, setIsFocused] = useState(false)
  const [date, setDate] = useState("")
  const [setTarget, entry] = useObserver()
  const calenderRef = useRef(null)
  const parentRef = useRef(null)
  const clientBottom =
    entry && entry.boundingClientRect ? entry.boundingClientRect.bottom : 0
  function handleSelect(iso) {
    setDate(iso)
    if (onSelect) onSelect(iso)
    setIsFocused(false)
  }
  function handleChange(e) {
    if (onChange) onChange(e)
    setDate(e.target.value)
  }
  useEffect(() => {
    setTarget(calenderRef.current)
  }, [])
  return (
    <StyledSearch tabIndex="-1" ref={parentRef}>
      <div
        className="scrim"
        onClick={e => {
          if (e.target == e.currentTarget) setIsFocused(false)
        }}
        style={{ display: focus ? "block" : "none" }}
      />
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
