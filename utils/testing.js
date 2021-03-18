import React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ElementsProvider } from "@rent_avail/core"
import "@testing-library/jest-dom/extend-expect"
import "regenerator-runtime"

// Create custom wrapper to add theme and base to tests.
function Wrapper({ children }) {
  return <ElementsProvider>{children}</ElementsProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render, userEvent }
