import React from "react"
import { render, fireEvent, screen } from "#testing"
import Tag from "../src"

describe("<Tag/>", () => {
  it("should render without crashing", () => {
    render(<Tag data-testid="tag-id" />)
    const tag = screen.getByTestId(/tag-id/)
    expect(tag).toBeInTheDocument()
  })
})
