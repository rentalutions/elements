import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import Highlight, { Prism } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/github"

const Pre = styled.pre`
  .token:last-of-type {
    padding-right: 2rem;
  }
`

export default function CodeBlock({
  children,
  language = "",
  code = "",
  style = {},
  ...props
}) {
  const availTheme = useContext(ThemeContext)
  const colorTheme = {
    ...theme,
    plain: { ...theme.plain, backgroundColor: availTheme.colors.ui_300 }
  }
  return (
    <Highlight
      {...props}
      Prism={Prism}
      code={code}
      language={language}
      theme={colorTheme}
    >
      {({
        className,
        style: highlightStyle,
        tokens,
        getLineProps,
        getTokenProps
      }) => (
        <Pre
          className={className}
          style={{ ...highlightStyle, ...style, padding: "2rem" }}
        >
          {tokens.map((line, key) => (
            <div key={key} {...getLineProps({ line, key })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}
