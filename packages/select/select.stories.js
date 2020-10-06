import React, { useState, useRef, Fragment } from "react"
import { Heading } from "@rent_avail/typography"
import { Container } from "@rent_avail/layout"
import {
  Dialog,
  DialogTarget,
  DialogHeader,
  ConfirmationDialog,
  FullscreenDialog,
} from "@rent_avail/dialog"
import { Button } from "@rent_avail/controls"
import { Select, SelectInput, SelectList, SelectItem } from "./src"

export default { title: "Select" }

function SelectExample() {
  const options = [
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "Arizona", value: "AZ" },
    { label: "Arkansas", value: "AR" },
    { label: "California", value: "CA" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
  ]
  const [state, setState] = useState("")
  return (
    <Fragment>
      <Heading mb="2rem">{state || "Select a value"}</Heading>
      <Select id="select-id" onSelect={(value) => setState(value)}>
        <SelectInput label="Choose a state" />
        <SelectList>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value} label={label}>
              {label}
            </SelectItem>
          ))}
        </SelectList>
      </Select>
    </Fragment>
  )
}

export function BasicUsage() {
  return (
    <Container>
      <SelectExample />
    </Container>
  )
}

export function SimplePortalUsage() {
  const [open, set] = useState(true)
  const dialogRef = useRef()
  function handleClick() {
    set((o) => !o)
  }
  return (
    <Container>
      <Dialog open={open} toggle={handleClick} id="confirmation-id">
        <DialogTarget>
          <Button onClick={() => set(true)}>open dialog</Button>
        </DialogTarget>
        <ConfirmationDialog ref={dialogRef}>
          <DialogHeader title="Select an option" />
          <SelectExample parentRef={dialogRef} />
        </ConfirmationDialog>
      </Dialog>
    </Container>
  )
}

export function FullscreenPortalUsage() {
  const [open, set] = useState(true)
  function handleClick() {
    set((o) => !o)
  }
  return (
    <Container>
      <Dialog open={open} toggle={handleClick} id="confirmation-id">
        <DialogTarget>
          <Button onClick={() => set(true)}>open dialog</Button>
        </DialogTarget>
        <FullscreenDialog>
          <Container>
            <DialogHeader title="Select an option" />
            <SelectExample />
          </Container>
        </FullscreenDialog>
      </Dialog>
    </Container>
  )
}
