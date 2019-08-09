import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { colors } from "../constants"

export default styled.section`
  padding: 2rem;
  border: 1px solid ${colors.ui_500};
  border-radius: 4px;
  background: ${colors.ui_100};
  box-shadow: 0 1rem 1rem -1rem rgba(0, 0, 0, 0.12);
  overflow: hidden;
  .card__actions {
    display: flex;
    flex-direction: row-reverse;
    & > *:not(:first-child) {
      margin-right: 2rem;
    }
  }
`

export function CardActions({ children, ...props }) {
  return (
    <nav className="card__actions" {...props}>
      {children}
    </nav>
  )
}

CardActions.propTypes = {
  children: PropTypes.node.isRequired
}
