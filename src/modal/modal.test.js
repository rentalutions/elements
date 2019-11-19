import React, { useState } from "react"
import { render, fireEvent, act } from "@testing-library/react"
import Modal from "src/modal"
import Button from "src/button"

describe("<Modal />", () => {
  const Component = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)
    return (
      <div>
        <Button data-testid="modal-button" onClick={handleOpen}>
          Toggle Modal
        </Button>
        <Modal open={open} toggle={handleOpen} data-testid="modal">
          <h1>Hello World</h1>
        </Modal>
      </div>
    )
  }
  it("Is not in the DOM when open is set to false", () => {
    const { queryByTestId } = render(<Component />)
    const modal = queryByTestId("modal")
    expect(modal).toBeNull()
  })
  it("Is has the modal body in the DOM after open is set to true.", async () => {
    const { getByText, getByTestId } = render(<Component />)
    const button = getByTestId("modal-button")
    await act(async () => {
      await fireEvent.click(button)
    })
    const modalHeader = getByText("Hello World")
    expect(modalHeader).toBeInTheDocument()
  })
})
