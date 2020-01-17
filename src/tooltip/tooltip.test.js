import React, { useRef, Fragment } from "react"
import Tooltip from "src/tooltip"
import Button from "src/button"
import { render, fireEvent } from "@testing-library/react"

describe("<Tooltip />", () => {
  function Wrapper() {
    const buttonRef = useRef()
    return (
      <Fragment>
        <Button ref={buttonRef}>Hello World</Button>
        <Tooltip target={buttonRef} id="button-target" data-testid="tooltip-id" />
      </Fragment>
    )
  }
  it("Should render a tooltip without crashing", () => {
    const { getByTestId } = render(<Wrapper />)
    const tooltip = getByTestId("tooltip-id")
    expect(tooltip).toBeInTheDocument()
  })
  it("Should not display a tooltip on initial render", () => {
    const { getByTestId } = render(<Wrapper />)
    const tooltip = getByTestId("tooltip-id")
    expect(tooltip).toHaveStyle(`
      display: none;
    `)
  })
  it("Should change it's display when focused", () => {
    const { getByTestId, getByText, debug } = render(<Wrapper />)
    const tooltip = getByTestId("tooltip-id")
    const button = getByText(/Hello World/)
    fireEvent.focus(button)
    debug()
    expect(tooltip).toHaveStyle(`
      display: block;
    `)
  })
})
