import React from "react"
import styled from "styled-components"

export default styled.section`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.ui_500};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.ui_100};
  box-shadow: 0 1rem 1rem -1rem rgba(0, 0, 0, 0.12);
  .card__actions {
    display: flex;
    flex-direction: row-reverse;
    & > *:not(:first-child) {
      margin-right: 2rem;
    }
  }
`
