import React, { Fragment, useState } from "react"
import { Container } from "@rent_avail/layout"
import { Text, Heading } from "@rent_avail/typography"
import Input from "@rent_avail/input"
import { Button } from "@rent_avail/controls"
import {
  Dialog,
  DialogTarget,
  DialogHeader,
  ConfirmationDialog,
  FullscreenDialog,
} from "./src"

export default { title: "Packages/Dialog" }

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
          <Text>This action will delete 46 files.</Text>
        </ConfirmationDialog>
      </Dialog>
    </Fragment>
  )
}

export function DialogWithBackdropStyles() {
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
        <ConfirmationDialog scrimSx={{zIndex: 4}}>
          <DialogHeader title="Are you sure?" />
          <Text>This action will delete 46 files.</Text>
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
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Text>
          <Text mt="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Text>
          <Text mt="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Text>
          <Text mt="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Text>
          <Text mt="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Text>
          <Text mt="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Text>
          <Text mt="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Text>
          <Text mt="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Text>
          <Text mt="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Text>
          <Text mt="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Text>
        </Container>
      </FullscreenDialog>
    </Dialog>
  )
}
