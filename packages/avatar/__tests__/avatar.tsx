import React from "react"
import { render, screen } from "#testing"
import { Avatar } from "../src"

describe("<Avatar />", () => {
  it("renders the component without crashing", () => {
    render(<Avatar />)
    const element = screen.getByRole(/figure/)
    expect(element).toBeInTheDocument()
  })
  it("renders the component with initials when set", () => {
    const initials = "PK"
    const { getByText } = render(<Avatar size="small" initials={initials} />)
    const element = getByText(initials)
    expect(element).not.toBeUndefined()
  })
  it("does not render initials when small prop isn't set", () => {
    const initials = "PK"
    const { queryByText } = render(<Avatar initials={initials} />)
    const element = queryByText(initials)
    expect(element).toBeNull()
  })
})
