import { Playground } from "docz"
import styled, { css } from "styled-components"

const rowStyles = css`
  flex-direction: row;
  > *:not(:last-child) {
    margin-right: 2rem;
  }
`

const columnStyles = css`
  flex-direction: column;
  > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`

export default styled(Playground)`
  display: flex;
  ${({ column }) => (column ? columnStyles : rowStyles)};
`
