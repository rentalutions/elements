import React, { useState } from "react"
import { render, fireEvent } from "@testing-library/react"
import { Dialog, DialogTarget, Fullscreen, Confirmation } from "./src"

describe("<Fullscreen />", () => {
  it("Renders without crashing.", () => {
    const { container } = render(
      <Dialog id="dialog-id">
        <DialogTarget>
          <button>open dialog</button>
        </DialogTarget>
        <Fullscreen>
          <p>Hello World</p>
        </Fullscreen>
      </Dialog>
    )
    expect(container).not.toBeNull()
  })
})
