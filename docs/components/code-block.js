import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import Highlight, { Prism } from "prism-react-renderer"
import codeTheme from "prism-react-renderer/themes/github"
import { LiveProvider, LiveError, LivePreview } from "react-live"
import { mdx } from "@mdx-js/react"

const Preview = styled.section`
  border: 0.5rem solid ${({ theme }) => theme.colors.ui_300};
  padding: 2rem;
`

const Pre = styled.pre`
  margin: 2rem 0;
  overflow: auto;
  .token:last-of-type {
    padding-right: 2rem;
  }
`

export default function CodeBlock({
  children,
  style = {},
  scope = {},
  ...props
}) {
  const language = children?.props?.className.replace(/language-/, "") || "jsx"
  const code = children?.props?.children.trim()
  const live = children?.props?.live
  const availTheme = useContext(ThemeContext)
  const colorTheme = {
    ...codeTheme,
    plain: { ...codeTheme.plain, backgroundColor: availTheme.colors.ui_300 },
  }
  return (
    <LiveProvider
      code={code}
      scope={{ ...scope, mdx, placesKey: process.env.placesKey }}
    >
      {live && (
        <Preview>
          <LiveError />
          <LivePreview />
        </Preview>
      )}
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
          getTokenProps,
        }) => (
          <Pre
            className={className}
            style={{
              ...highlightStyle,
              ...style,
              padding: "2rem",
              marginTop: live ? 0 : "2rem",
            }}
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
    </LiveProvider>
  )
}
