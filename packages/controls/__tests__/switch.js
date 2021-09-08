import React from "react"
import { render, fireEvent } from "#testing"
import { Switch } from "../src"

describe("<Toggle />", () => {
  it("Should be checked when clicked.", async () => {
    const { container, findByTestId } = render(<Switch data-testid="toggle" />)
    const element = container.firstChild
    const input = await findByTestId(/toggle/)
    expect(input).not.toBeChecked()
    fireEvent.click(element)
    expect(input).toBeChecked()
  })
  it("Should not be checked when disabled and clicked.", async () => {
    const { container, findByTestId } = render(
      <Switch data-testid="toggle" disabled />
    )
    const element = container.firstChild
    const input = await findByTestId(/toggle/)
    fireEvent.click(element)
    expect(input).not.toBeChecked()
  })
})
