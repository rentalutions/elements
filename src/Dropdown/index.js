import React, { Children, createElement } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DropdownWrapper = styled.div`
  position: relative;
  &:hover {
    .dropdown-menu {
      display: block;
    }
  }
  .dropdown-menu {
    display: none;
  }
`

function Dropdown ({
  className,
  children
}) {
  return (
    <DropdownWrapper className={`dropdown ${className}`}>
      {children}
    </DropdownWrapper>
  )
}

Dropdown.Menu = ({
  children,
  className
}) => {
  return (
    <ul className={`dropdown-menu ${className}`}>
      {children}
    </ul>
  )
}

export default Dropdown
