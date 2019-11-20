import React from "react"
import { render } from "@testing-library/react"
import Button from "src/button"
import { colors } from "src/constants"

describe("<Button />", () => {
  test("It renders a button with the correct text.", () => {
    const { getByTestId } = render(<Button data-testid="button">Hello World</Button>)
    expect(getByTestId("button")).toHaveTextContent("Hello World")
  })
  test("It renders a primary button with a blue background and white text.", () => {
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
})
