import React, { Fragment, useState } from "react"
import { Dialog, DialogTarget, Confirmation, Fullscreen } from "./src"
import { Heading } from "@rent_avail/typography"
import Input from "@rent_avail/input"
import { Button } from "@rent_avail/controls"

export default { title: "Dialog" }

export function ConfirmationUsage() {
  const [open, set] = useState(false)
  function handleClick() {
    set((o) => !o)
  }
  return (
    <Fragment>
      <Dialog open={open} toggle={handleClick} id="confirmation-id">
        <DialogTarget>
          <Button onClick={handleClick}>Open Modal</Button>
        </DialogTarget>
        <Confirmation>Hello World</Confirmation>
      </Dialog>
    </Fragment>
  )
}

export function FullscreenUsage() {
  const [open, set] = useState(false)
  function handleClick() {
    set((o) => !o)
  }
  return (
    <Dialog open={open} toggle={handleClick} id="fullscreen-id">
      <DialogTarget>
        <Button onClick={handleClick}>open modal</Button>
      </DialogTarget>
      <Fullscreen title="Application Settings">
        <Heading as="h4" mb="2rem">
          Updating these settings will not effect in progress applications.
        </Heading>
        <Input label="Hello World" />
      </Fullscreen>
    </Dialog>
  )
}
