import React from "react"
import { render, screen, fireEvent, waitFor } from "#testing"
import { Select, SelectInput, SelectList, SelectItem } from "../src"

describe("<Select />", () => {
  it("Should render without crashing", () => {
    render(
      <Select id="select-id">
        <SelectInput data-testid="select-input" />
        <SelectList>
          <SelectItem>Hello Item</SelectItem>
        </SelectList>
      </Select>
    )

    const input = screen.getByTestId("select-input")

    expect(input).toBeInTheDocument()
  })
  // it("Should capture focus on click", async () => {
  //   render(
  //     <Select id="select-id">
  //       <SelectInput data-testid="select-click" label="select label" />
  //       <SelectList>
  //         <SelectItem>Hello Item</SelectItem>
  //       </SelectList>
  //     </Select>
  //   )
  //   const input = screen.getByLabelText(/select label/)
  //   screen.debug(input)
  //   expect(input).toBeInTheDocument()
  // })
})
