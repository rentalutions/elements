import React from "react"
import { render } from "testing-utils"
import { Select, SelectInput, SelectList, SelectItem } from "../src"

describe("<Select />", () => {
  it("Should render without crashing", () => {
    const { container, getByTestId } = render(
      <Select id="select-id">
        <SelectInput data-testid="select-input" />
        <SelectList>
          <SelectItem>Hello Item</SelectItem>
        </SelectList>
      </Select>
    )

    const input = getByTestId("select-input")

    expect(container).not.toBeNull()

    // fireEvent.focus(input)

    // expect(input).toHaveFocus()
  })
})
