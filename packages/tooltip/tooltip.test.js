import React from "react"
import Tooltip, { TooltipTarget, TooltipContent } from "src/tooltip"
import Button from "src/button"
import { render } from "@testing-library/react"

describe("<Tooltip />", () => {
  it("Should render a tooltip without crashing", () => {
    const Wrapper = () => {
      return (
        <Tooltip content="This is a tooltip.">
          <TooltipTarget>
            <Button data-testid="tooltip-target">hello world</Button>
          </TooltipTarget>
          <TooltipContent data-testid="tooltip-content">
            <p>Look, a tooltip.</p>
          </TooltipContent>
        </Tooltip>
      )
    }
    const { getByTestId, queryByTestId } = render(<Wrapper />)
    expect(getByTestId("tooltip-target")).toBeInTheDocument()
    expect(queryByTestId("tooltip-content")).toBeNull()
  })
})
