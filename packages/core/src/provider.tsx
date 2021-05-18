import React, { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"
import { baseTheme } from "./base-theme"
import { Reset } from "./reset"

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
