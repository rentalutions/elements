import React, { useState } from "react"
import { render, fireEvent, act } from "@testing-library/react"
import FullPageModal from "src/fullpage-modal"

describe("<FullPageModal />", () => {
  function TestComponent() {
    const [open, set] = useState(false)
    const handleClick = () => set(true)
    return (
      <section className="test-section">
        <button type="button" data-testid="button" onClick={handleClick}>
          open modal
        </button>
        <FullPageModal data-testid="modal-element" open={open} toggle={set}>
          <h1>Hello World</h1>
        </FullPageModal>
      </section>
    )
  }
  it("Should not render the modal if open is set to false.", async () => {
    const { queryByTestId } = render(<TestComponent />)
    const modal = await queryByTestId("modal-element")
    expect(modal).not.toBeInTheDocument()
  })
  it("Should be in the document after open is set to true.", async () => {
    const { queryByTestId, queryByText } = render(<TestComponent />)
    const button = await queryByTestId(/button/)
    await act(async () => {
      fireEvent.click(button)
    })
    const modal = await queryByTestId(/modal-element/)
    const header = await queryByText(/Hello World/)
    expect(modal).toBeInTheDocument()
    expect(header).toBeInTheDocument()
  })
})
