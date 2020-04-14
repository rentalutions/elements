import React from "react"
import { Tooltip, TooltipTarget, TooltipContent } from "./src"
import { render } from "@testing-library/react"

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
    const { getByTestId, queryByTestId } = render(<Wrapper />)
    expect(getByTestId("tooltip-target")).toBeInTheDocument()
    expect(queryByTestId("tooltip-content")).toBeNull()
  })
})
