import React from "react"
import { render } from "testing-utils"
import { Select, SelectInput, SelectList, SelectItem } from "../src"

describe("<Select />", () => {
  it("Should render without crashing", () => {
    const { container } = render(
      <Select id="select-id">
        <SelectInput />
        <SelectList>
          <SelectItem>Hello Item</SelectItem>
        </SelectList>
      </Select>
    )
    expect(container).not.toBeNull()
  })
})
