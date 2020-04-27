import React, { useState } from "react"
import { render } from "testing-utils"
import { Button } from "../src"

describe("<Button />", () => {
  it("renders a button without crashing", () => {
    const text = "Hello World"
    const { queryByText } = render(<Button>{text}</Button>)
    expect(queryByText(text)).not.toBeNull()
  })
  it("renders a primary button when passed the right variant", () => {
    const id = "test-button"
    const { queryByTestId } = render(
      <Button data-testid={id} variant="primary">
        Hello World
      </Button>
    )
    const button = queryByTestId(id)
    expect(button).toHaveStyle(`
      background: #0f3e6f;
    `)
  })
})
