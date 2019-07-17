import React from "react"
import styled from "styled-components"
import { colors } from "../constants"

export default styled.section`
  padding: 2rem;
  border: 1px solid ${colors.ui_500};
  border-radius: 4px;
  background: ${colors.ui_100};
  box-shadow: 0 12px 12px -12px rgba(0, 0, 0, 0.12);
  .card__actions {
    display: flex;
    flex-direction: row-reverse;
    & > *:not(:first-child) {
      margin-right: 2rem;
    }
  }
`

/**
 *
 * @param {Object} children
 *
 */
export function CardActions({ children, ...props }) {
  return (
    <nav className="card__actions" {...props}>
      {children}
    </nav>
  )
}
