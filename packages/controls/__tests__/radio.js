import React from "react"
import { render, fireEvent } from "#testing"
import { Radio } from "../src"

describe("<Radio />", () => {
  it("Is checked when toggled.", () => {
    const { container, getByTestId } = render(<Radio data-testid="input" />)
    const element = container.firstChild
    const input = getByTestId("input")
    expect(input).not.toBeChecked()
    fireEvent.click(element)
    expect(input).toBeChecked()
  })
  it("Cannot be checked when disabled.", () => {
    const { getByTestId, container } = render(
      <Radio data-testid="radio-input" disabled />
    )
    const element = container.firstChild
    const input = getByTestId("radio-input")
    fireEvent.click(element)
    expect(input).not.toBeChecked()
    expect(input).toBeDisabled()
  })
})
