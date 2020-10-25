import React from "react"
import { render, screen, fireEvent } from "testing-utils"
import Input from "../src"

describe("<Input />", () => {
  it("renders without crashing", () => {
    render(<Input label="Phone Number" />)
    expect(screen.getByText(/Phone Number/)).toBeInTheDocument()
  })
  it("stores the value internally", async () => {
    render(<Input aria-label="name-input" label="Name" />)
    const input = screen.getByLabelText(/name-input/)
    fireEvent.change(input, { target: { value: "Chuck" } })
    expect(input).toHaveValue("Chuck")
    fireEvent.change(input, { target: { value: "Bruce" } })
    expect(input).toHaveValue("Bruce")
  })
  it("is raised on mount when type is date", () => {
    render(<Input type="date" aria-label="birth-input" label="Birth Date" />)
    const input = screen.getByLabelText(/birth-input/)
    expect(input).toHaveAttribute("type", "date")
  })
})
