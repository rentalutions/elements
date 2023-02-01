import { Fragment, useState } from "react"
import { Box, Container } from "@rent_avail/core"
import { Button, Input } from "@rent_avail/controls"
import {
  Dialog,
  DialogTarget,
  DialogHeader,
  ConfirmationDialog,
  FullscreenDialog,
} from "../src"

// export default { title: "Packages/Dialog" }

export function Confirmation() {
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
          <Box as="p">This action will delete 46 files.</Box>
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
        <ConfirmationDialog scrimSx={{ zIndex: 4 }}>
          <DialogHeader title="Are you sure?" />
          <Box as="p">This action will delete 46 files.</Box>
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
          <Box as="h4" sx={{ mb: 2 }}>
            Updating these settings will not effect in progress applications.
          </Box>
          <Input label="Hello World" />
          <Box as="p" sx={{ my: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Box>
          <Box as="p" sx={{ my: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Box>
          <Box as="p" sx={{ my: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Box>
          <Box as="p" sx={{ my: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Box>
          <Box as="p" sx={{ my: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Box>
          <Box as="p" sx={{ my: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Box>
          <Box as="p" sx={{ my: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Box>
          <Box as="p" sx={{ my: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Box>
          <Box as="p" sx={{ my: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Box>
          <Box as="p" sx={{ my: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Box>
          <Box as="p" sx={{ my: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Box>
          <Box as="p" sx={{ my: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem non, a possimus nemo eius pariatur amet. Minima iste
            corrupti quas! Neque praesentium distinctio officiis enim dolorum
            quibusdam quasi repudiandae.
          </Box>
        </Container>
      </FullscreenDialog>
    </Dialog>
  )
}
