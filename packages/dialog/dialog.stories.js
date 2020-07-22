import React, { Fragment, useState } from "react"
import {
  Dialog,
  DialogTarget,
  DialogHeader,
  ConfirmationDialog,
  FullscreenDialog,
} from "./src"
import { Container } from "@rent_avail/layout"
import { Text, Heading } from "@rent_avail/typography"
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
        <ConfirmationDialog>
          <DialogHeader title="Are you sure?" />
          <Text>
            This action will delete 43 files. Are you sure you want to continue?
          </Text>
        </ConfirmationDialog>
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
      <FullscreenDialog>
        <Container>
          <DialogHeader title="Application Settings" />
          <Heading as="h4" mb="2rem">
            Updating these settings will not effect in progress applications.
          </Heading>
          <Input label="Hello World" />
        </Container>
      </FullscreenDialog>
    </Dialog>
  )
}
