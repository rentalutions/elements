import React, { useState } from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { Check } from "react-feather"
import { colors } from "../constants"

const filterStyles = css`
  cursor: pointer;
  background: ${colors.ui_300};
  outline: none;
  transition: 100ms;
  &:hover {
    background: ${colors.blue_100};
  }
  &.checked {
    background: ${colors.blue_500};
    color: ${colors.ui_100};
  }
`

const StyledTag = styled.span.attrs({
  checked: ({ isChecked }) => isChecked,
  role: ({ filter }) => (filter ? "checkbox" : "row"),
  tabIndex: 0,
  "aria-checked": ({ isChecked }) => isChecked
})`
  display: inline-flex;
  align-items: center;
  font-size: 1.333rem;
  line-height: 2rem;
  vertical-align: center;
  padding: 0 1rem;
  border-radius: 1rem;
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  svg {
    width: 1.333rem;
    height: 1.333rem;
    margin-right: 0.5rem;
  }
  ${({ filter }) => filter && filterStyles};
`

export default function Tag({
  children,
  checked,
  className,
  icon: Icon,
  filter,
  onChange,
  ...props
}) {
  const [isChecked, setIsChecked] = useState(checked)
  function handleChange(e) {
    setIsChecked(!isChecked)
    onChange(e)
  }
  if (!filter)
    return (
      <StyledTag className={className} {...props}>
        {Icon && <Icon />} {children}
      </StyledTag>
    )
  return (
    <StyledTag
      className={`${className} ${isChecked && "checked"}`}
      onClick={handleChange}
      filter={filter}
      checked={isChecked}
      {...props}
    >
      {isChecked ? <Check /> : Icon ? <Icon /> : null}
      {children}
    </StyledTag>
  )
}

Tag.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
  children: PropTypes.element,
  className: PropTypes.string,
  filter: PropTypes.bool,
  icon: PropTypes.element,
  onChange: PropTypes.func
}

Tag.defaultProps = {
  bg: colors.gold_500,
  color: colors.ui_900,
  checked: false,
  children: null,
  className: "",
  filter: false,
  icon: null,
  onChange: () => null
}
