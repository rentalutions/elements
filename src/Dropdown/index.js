import React, { PureComponent, Children, cloneElement } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const DropdownWrapper = styled.div`
  position: relative;
  .dropdown__list {
    position: absolute;
    top: calc(100% + 1em);
    left: 0;
    visibility: ${({ open }) => (open ? "initial" : "hidden")};
  }
`

export default class Dropdown extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }
  render() {
    const { children, items, title } = this.props
    return (
      <DropdownWrapper
        ref={node => (this.element = node)}
        onClick={() => this.setState({ open: !this.state.open })}
        open={this.state.open}
      >
        {title}
        <ul className="dropdown__list">
          {items.map(item => (
            <li
              key={`dropdown__list-item-${Math.random()}`}
              className="dropdown__list-item"
            >
              {cloneElement(item, item.props)}
            </li>
          ))}
        </ul>
      </DropdownWrapper>
    )
  }
}
