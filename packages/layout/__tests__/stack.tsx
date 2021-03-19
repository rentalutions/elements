import React from "react"
import { render, screen } from "#testing"
import { Stack, Box } from "../src"

describe("<Stack/>", () => {
  it("renders each child with a gap in between", () => {
    render(
      <Stack mb="2rem" data-testid="stack-id">
        <Box height="10rem" />
        <Box height="10rem" />
        <Box height="10rem" />
      </Stack>
    )
    const stack = screen.getByTestId(/stack-id/)
    expect(stack).toBeInTheDocument()
  })
})
