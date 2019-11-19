import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Radio from "src/radio"

describe("<Radio />", () => {
  it("Is checked when toggled.", () => {
    const { getByTestId } = render(<Radio data-testid="radio-input" />)
    const element = getByTestId("radio-input")
    expect(element).not.toBeChecked()
    fireEvent.click(element)
    expect(element).toBeChecked()
  })
  it("Cannot be checked when disabled.", () => {
    const { getByTestId } = render(<Radio data-testid="radio-input" disabled />)
    const element = getByTestId("radio-input")
    fireEvent.click(element)
    expect(element).toBeChecked()
  })
})
