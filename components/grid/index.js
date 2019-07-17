import styled from "styled-components"

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(${({ columns = 12 }) => columns}, 1fr);
  grid-gap: 2rem;
`
export const Col = styled.div`
  grid-column: span ${({ col = [12] }) => col[0]};
`
