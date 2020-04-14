import React from "react"
import { render } from "@testing-library/react"
import { Select, SelectInput, SelectList, SelectItem } from "./src"
import { theme } from "@rent_avail/base"

describe("<Select />", () => {
  it("Should render without crashing", () => {
    const { container } = render(
      <Select id="select-id">
        <SelectInput theme={theme} />
        <SelectList theme={theme}>
          <SelectItem theme={theme}>Hello Item</SelectItem>
        </SelectList>
      </Select>
    )
    expect(container).not.toBeNull()
  })
})
