import styled, { css } from "styled-components"

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(${({ columns = 12 }) => columns}, 1fr);
  grid-gap: 2rem;
`
export const Col = styled.div`
  grid-column: ${({ offset = null }) => offset && `${offset[0]} / `} span
    ${({ span = [12] }) => span[0]};
  @media (min-width: 40rem) {
    grid-column: ${({ offset = null }) => offset && `${offset[1]} / `} span
      ${({ span = [12] }) => span[1]};
  }
  @media (min-width: 60rem) {
    grid-column: ${({ offset = null }) => offset && `${offset[2]} / `} span
      ${({ span = [12] }) => span[2]};
  }
`

// const getColumns = css`
//   grid-column: ${({ offset = null }) => offset && `${offset[0]} / `} span
//     ${({ span = [12] }) => span[0]};
//   @media (min-width: 40rem) {
//     grid-column: ${({ offset = null }) => offset && `${offset[1]} / `} span
//       ${({ span = [12] }) => span[1]};
//   }
// `
