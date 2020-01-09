import React, { useState } from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { Check } from "react-feather"
import { colors } from "../constants"

const filterStyles = css`
  background: ${colors.ui_300};
  color: ${colors.ui_700};
  cursor: pointer;
  transition: 100ms;
  user-select: none;
  &:hover {
    background: ${colors.blue_100};
    color: ${colors.blue_700};
  }
  &.checked {
    background: ${colors.blue_500};
    color: ${colors.ui_100};
  }
  input[type="checkbox"] {
    appearance: none;
    width: 0;
    height: 0;
    position: absolute;
  }
`

const StyledTag = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;
  border-radius: 1rem;
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  font-size: 1.334rem;
  line-height: 1.5;
  svg {
    width: 1.334rem;
    height: 1.334rem;
    margin-right: 0.5rem;
  }
  ${({ isFilter }) => isFilter && filterStyles}
`

export default function Tag({
  children,
  className,
  filter,
  icon: Icon,
  checked,
  onChange,
  bg,
  color,
  ...props
}) {
  const [internalChecked, set] = useState(checked)
  function handleCheck(e) {
    if (onChange) onChange(e)
    set(e.target.checked)
  }
  if (!filter)
    return (
      <StyledTag className={className} bg={bg} color={color} {...props}>
        {Icon && <Icon />}
        {children}
      </StyledTag>
    )
  return (
    <StyledTag
      className={`${className} ${internalChecked ? "checked" : ""}`}
      as="label"
      isFilter={filter}
      bg={bg}
      color={color}
    >
      <input
        type="checkbox"
        onChange={handleCheck}
        checked={internalChecked}
        {...props}
      />
      {internalChecked ? <Check /> : Icon ? <Icon /> : null}
      {children}
    </StyledTag>
  )
}

Tag.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
  children: PropTypes.node,
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
