import React, { Fragment, useContext } from "react"
import { renderToString } from "react-dom/server"
import CodeBlock from "components/CodeBlock"
import styled, { ThemeContext } from "styled-components"

const Preview = styled.section`
  border: 1rem solid ${({ theme }) => theme.colors.ui_300};
  padding: 1rem;
`

export default function CodeSandbox({ children, ...props }) {
  const string = renderToString(children)
  const theme = useContext(ThemeContext)
  return (
    <Fragment>
      <Preview>{children}</Preview>
      <CodeBlock
        language="jsx"
        code={string}
        style={{
          marginTop: 0,
          background: theme.colors.ui_300,
          borderRadius: 0
        }}
      />
    </Fragment>
  )
}
