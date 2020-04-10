import React, { useState } from "react"
import { render, act, fireEvent } from "@testing-library/react"
import Button from "src/button"
import { colors } from "src/constants"

describe("<Button />", () => {
  it("Should render a button with the correct text.", () => {
    const { getByTestId } = render(<Button data-testid="button">Hello World</Button>)
    expect(getByTestId("button")).toHaveTextContent("Hello World")
  })
  it("Should render a primary button with a blue background and white text.", () => {
    const { getByTestId } = render(
      <Button data-testid="button" primary>
        Hello World
      </Button>
    )
    const element = getByTestId("button")
    expect(element).toHaveStyle(`
      background-color: ${colors.blue_500};
      color: ${colors.ui_100};
    `)
  })
  // it("Should register a click.", async () => {
  //   const { findByTestId } = render(() => {
  //     const [count, set] = useState(0)
  //     return (
  //       <Button data-testid="button" onClick={e => set(count + 1)}>
  //         Count: {count}
  //       </Button>
  //     )
  //   })
  //   const button = await findByTestId("button")
  //   await act(async () => {
  //     fireEvent.click(button)
  //   })
  //   expect(button).toHaveTextContent("Count: 1")
  // })
})
