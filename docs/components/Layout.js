import styled from "styled-components"

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 25rem auto;
  min-height: 100vh;
`

const Main = styled.main`
  height: 100vh;
  overflow-y: auto;
`

const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.ui_300};
  height: 100vh;
  overflow-y: auto;
  padding: 2rem;
  ul {
    list-style: none;
  }
  ul li a {
    color: ${({ theme }) => theme.colors.blue_500};
    &:hover {
      color: ${({ theme }) => theme.colors.blue_300};
    }
  }
`

export { PageWrapper, Main, Sidebar }
