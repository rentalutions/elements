import React from "react"
import styled from "styled-components"
import copy from "clipboard-copy"

const StyledSwatch = styled.div`
  position: relative;
  display: flex;
  background-color: ${({ color }) => color};
  padding: 2rem;
  cursor: pointer;
  .name {
    margin-right: auto;
    font-weight: 700;
  }
  &::after {
    content: '${({ color }) => `Copied ${color}`}';
    opacity: 0;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    background: #fff;
    padding: 1rem;
    border-radius: 2px;
    color: #000;
    transition: 200ms;
    box-shadow: 0 3px 6px -3px rgba(0,0,0,0.24);
  }
  &.copied::after {
    opacity: 1;
  }
`

export const Palette = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2rem;
`

export const Swatch = ({ color, name, ...props }) => {
  const handleClick = e => {
    const { target } = e
    copy(color)
    target.classList.add("copied")
    setTimeout(() => target.classList.remove("copied"), 1000)
  }
  return (
    <StyledSwatch color={color} onClick={handleClick} {...props}>
      <p className="name">{name}</p>
      <p>{color}</p>
    </StyledSwatch>
  )
}
