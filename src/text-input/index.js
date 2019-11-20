import PropTypes from "prop-types"
import React, { forwardRef, useState, useEffect } from "react"
import styled from "styled-components"
import { colors } from "src/constants"

const StyledInput = styled.label`
  position: relative;
  cursor: text;
  display: block;
  width: 100%;
  input {
    all: unset;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 3rem 2rem 1rem 2rem;
    border: 2px solid ${({ hasValue }) => (hasValue ? colors.blue_500 : colors.ui_500)};
    border-radius: 4px;
    ${({ icon }) => icon && `padding-left: 5rem;`}
  }
  .label {
    position: absolute;
    left: calc(${({ icon }) => (icon ? "5rem" : "2rem")} + 2px);
    top: calc(2rem + 2px);
    right: calc(2rem - 2px);
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${colors.ui_700};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: 100ms;
    will-change: font-size, transform;
    ${({ hasValue }) =>
      hasValue &&
      `
      font-size: 1.333rem;
      transform: translate3d(0, -1.333rem, 0);
    `}
  }
  .input__icon {
    position: absolute;
    left: calc(2rem + 2px);
    top: calc(2rem + 2px);
    color: ${({ hasValue }) => (hasValue ? colors.blue_500 : colors.ui_700)};
  }
  input:focus {
    border-color: ${colors.blue_500};
    & ~ .label {
      font-size: 1.333rem;
      transform: translate3d(0, -1.333rem, 0);
    }
    & ~ .input__icon {
      color: ${colors.blue_500};
    }
  }
`

export default forwardRef(function TextInput(
  { className, icon: Icon, label, onChange, initialValue, value, ...props },
  ref
) {
  const [hasValue, setHasValue] = useState(initialValue)
  const handleChange = e => {
    if (onChange) onChange(e)
    if (e.target.value.length) setHasValue(true)
    else setHasValue(false)
  }
  useEffect(() => {
    if (value && value.length) setHasValue(true)
  }, [value])
  return (
    <StyledInput className={className} icon={!!Icon} hasValue={hasValue}>
      <input type="text" ref={ref} {...props} value={value} onChange={handleChange} />
      {Icon && <Icon className="input__icon" width={24} height={24} />}
      <span className="label">{label}</span>
    </StyledInput>
  )
})
