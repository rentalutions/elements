import React, { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"
import systemCss, { CSSObject } from "@styled-system/css"
import { baseTheme } from "./base-theme"
import { Reset } from "./reset"

export const sx = ({ sx = {} }: { sx?: CSSObject }) => {
  const { text, ...styleProps } = sx
  if (text) {
    const textArray = Array.isArray(text) ? text : [text]
    return systemCss({
      variant: textArray.map((txt: string) => `text.${txt}`),
      ...styleProps,
    })
  }
  return systemCss(styleProps)
}

export function ElementsProvider({
  theme = {},
  children,
}: PropsWithChildren<{ theme?: Partial<typeof baseTheme> }>) {
  return (
    <ThemeProvider theme={{ ...baseTheme, ...theme }}>
      <Reset />
      {children}
    </ThemeProvider>
  )
}
