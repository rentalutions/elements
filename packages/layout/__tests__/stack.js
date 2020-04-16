import React from "react"
import { render, screen } from "testing-utils"
import { Stack, Box } from "../src"

describe("<Stack/>", () => {
  it("renders each child with a gap in between", () => {
    render(
      <Stack data-testid="stack-id">
        <Box height="10rem" />
        <Box height="10rem" />
        <Box height="10rem" />
      </Stack>
    )
  })
  expect(screen.getByTestId(/stack-id/)).toHaveStyle(`
    grid-gap: 2rem;
  `)
})
