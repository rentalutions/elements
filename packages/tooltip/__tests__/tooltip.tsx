import React from "react"
import { render, screen } from "#testing"
import { Tooltip, TooltipTarget, TooltipContent } from "../src"

describe("<Tooltip />", () => {
  it("Should render a tooltip without crashing", () => {
    const Wrapper = () => {
      return (
        <Tooltip>
          <TooltipTarget>
            <button data-testid="tooltip-target">hello world</button>
          </TooltipTarget>
          <TooltipContent data-testid="tooltip-content">
            <p>Look, a tooltip.</p>
          </TooltipContent>
        </Tooltip>
      )
    }
    render(<Wrapper />)
    const target = screen.queryByTestId(/tooltip-target/)
    const content = screen.queryByTestId(/tooltip-content/)
    expect(target).toBeInTheDocument()
    expect(content).toBeNull()
  })
})
