import React from "react"
import { render } from "#testing"
import { FluidProgress, FixedProgress } from "../src"

describe("<FluidProgress />", () => {
  it("Renders a FluidProgress without crashing", () => {
    const { container } = render(
      <FluidProgress label="Current Step" current={1} total={3} />
    )
    const progressBar = container.querySelector(".progress")
    expect(progressBar).toBeInTheDocument()
  })
})

describe("<FixedProgress />", () => {
  it("Renders a FixedProgress without crashing", () => {
    const { container } = render(
      <FixedProgress steps={{ "Step One": true, "Step Two": false }} />
    )
    const firstStep = container.querySelector(".step")
    expect(firstStep).toBeInTheDocument()
  })
})
