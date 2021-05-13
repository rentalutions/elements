import React, { useContext, useState } from "react"
import styled, { ThemeContext } from "styled-components"
import Highlight, { Prism } from "prism-react-renderer"
import codeTheme from "prism-react-renderer/themes/ultramin"
import { LiveProvider, LiveError, LivePreview } from "react-live"
import { Box } from "@rent_avail/layout"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "react-feather"

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
  const initialState = children?.props?.initialOpen === "true"
  const [isOpen, setOpen] = useState(initialState || !live)
  const availTheme = useContext(ThemeContext)
  const colorTheme = {
    ...codeTheme,
    plain: { ...codeTheme.plain, backgroundColor: availTheme.colors.ui_300 },
  }
  return (
    <LiveProvider
      code={code}
      scope={{ ...scope, placesKey: process.env.placesKey }}
    >
      {live && (
        <Box>
          <Box
            sx={{
              border: `4px solid transparent`,
              borderColor: "ui_300",
              p: "2rem",
            }}
          >
            <LiveError />
            <LivePreview />
          </Box>
          <Box
            sx={{ bg: "ui_300", py: "1rem", px: "2rem", textAlign: "right" }}
          >
            <Box
              as={motion.span}
              sx={{ display: "inline-flex", cursor: "pointer" }}
              role="button"
              onClick={(e) => setOpen(!isOpen)}
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 180 : 0 }}
            >
              <ChevronDown />
            </Box>
          </Box>
        </Box>
      )}
      <AnimatePresence>
        {isOpen && (
          <Box
            layout
            as={motion.div}
            key="code"
            initial={live ? "collapsed" : "open"}
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
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
          </Box>
        )}
      </AnimatePresence>
    </LiveProvider>
  )
}
