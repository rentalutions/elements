import React from "react"
import { render, fireEvent } from "#testing"
import { Checkbox } from "../src"

describe("<Checkbox />", () => {
  it("Should be checked on click.", () => {
    const { getByTestId, container } = render(
      <Checkbox data-testid="checkbox" />
    )
    const input = getByTestId("checkbox")
    const element = container.firstChild
    expect(input).not.toBeChecked()
    fireEvent.click(element)
    expect(input).toBeChecked()
  })

  it("Shouldn't be able to be checked when disabled.", () => {
    const { getByTestId, container } = render(
      <Checkbox data-testid="checkbox" disabled />
    )
    const input = getByTestId("checkbox")
    const element = container.firstChild
    fireEvent.click(element)
    expect(input).not.toBeChecked()
    expect(input).toBeDisabled()
  })
})
