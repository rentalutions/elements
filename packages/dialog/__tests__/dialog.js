import React, { useState } from "react"
import { render, fireEvent } from "tester"
import { Dialog, DialogTarget, Fullscreen, Confirmation } from "../src"

describe("<Fullscreen />", () => {
  const TestUi = ({ ...props }) => {
    return (
      <Dialog {...props}>
        <DialogTarget data-testid="target-id">
          <button>open dialog</button>
        </DialogTarget>
        <Fullscreen data-testid="modal-id">
          <p>Hello World</p>
        </Fullscreen>
      </Dialog>
    )
  }
  const { queryByTestId } = render(<TestUi />)
  it("renders without crashing", () => {
    const target = queryByTestId("target-id")
    expect(target).toBeInTheDocument()
  })
  it("does not render modal without a click", () => {
    const modal = queryByTestId("modal-id")
    expect(modal).not.toBeInTheDocument()
  })
  it("renders modal when open is true", () => {
    const { queryByText } = render(<TestUi open id="dialog-id" />)
    const modalBody = queryByText(/Hello World/)
    expect(modalBody).toBeInTheDocument()
  })
})
