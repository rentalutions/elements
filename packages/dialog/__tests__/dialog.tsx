import React, { useState } from "react"
import { render, screen } from "#testing"
import { Dialog, DialogTarget, FullscreenDialog } from "../src"

describe("<Fullscreen />", () => {
  const TestUi = ({ ...props }) => {
    return (
      <Dialog {...props}>
        <DialogTarget data-testid="target-id">
          <button>open dialog</button>
        </DialogTarget>
        <FullscreenDialog data-testid="modal-id">
          <p>Hello World</p>
        </FullscreenDialog>
      </Dialog>
    )
  }
  it("renders without crashing", () => {
    render(<TestUi />)
    const target = screen.getByTestId("target-id")
    expect(target).toBeInTheDocument()
  })
  it("does not render modal without open being true", () => {
    render(<TestUi />)
    const modal = screen.queryByTestId("modal-id")
    expect(modal).not.toBeInTheDocument()
  })
  it("renders modal when open is true", () => {
    render(<TestUi open id="dialog-id" />)
    const modalBody = screen.getByText(/Hello World/)
    expect(modalBody).toBeInTheDocument()
  })
})
