import React from "react"
import styled from "styled-components"

const StyledToggle = styled.label`
  position: relative;
  display: ${({ inline }) => (inline ? "inline-block" : "block")};
  input {
    display: none;
    &:checked + .slider {
      background-color: #f9f9f9;
      &:before {
        background-color: #137bb5;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
        transform: translateX(var(--sizing-unit));
      }
    }
  }
  .slider {
    position: relative;
    height: var(--sizing-unit);
    width: calc(var(--sizing-unit) * 2);
    background-color: #aaa;
    border-radius: calc(var(--sizing-unit)/2);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12);
    transition: 200ms;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
      height: var(--sizing-unit);
      width: var(--sizing-unit);
      background-color: #e4e4e4;
      transition: 200ms;
    }
  }
`

const Toggle = props => (
  <StyledToggle>
    <Text small={props.inline}>{props.title}</Text>
    <input type="checkbox" />
    <div className="slider" />
  </StyledToggle>
)
