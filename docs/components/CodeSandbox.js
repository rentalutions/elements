import React, { Fragment } from "react"
import { renderToString } from "react-dom/server"
import Highlight, { defaultProps } from "prism-react-renderer"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { mdx } from "@mdx-js/react"

const transformCode = code => {
  if (code.startsWith("()") || code.startsWith("class")) return code
  return `<React.Fragment>${code}</React.Fragment>`
}

export default function CodeSandbox({ children, className, live }) {
  const lang = className?.replace(/language-/, "")
  const code = renderToString(children)
  if (live)
    return (
      <div style={{ marginTop: "40px", backgroundColor: "black" }}>
        <LiveProvider
          code={code.trim()}
          transformCode={transformCode}
          scope={{ mdx }}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    )
  return (
    <Highlight {...defaultProps} code={code.trim()} language={lang}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
