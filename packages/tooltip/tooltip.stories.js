import React, { useRef, useState } from "react"
import { Tooltip, TooltipContent, TooltipTarget } from "./src"
import { Container } from "@rent_avail/layout"
import { Heading } from "@rent_avail/typography"
import {
  Dialog,
  DialogHeader,
  DialogTarget,
  FullscreenDialog,
} from "@rent_avail/dialog"
import { Button } from "@rent_avail/controls"

export default { title: "Tooltip" }

export function BasicUsage() {
  return (
    <Container>
      <Tooltip>
        <TooltipTarget>
          <Heading
            as="h5"
            style={{ textDecoration: "underline" }}
            color="blue_500"
          >
            Hello World
          </Heading>
        </TooltipTarget>
        <TooltipContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptatum
          nulla cupiditate, deserunt est placeat iure similique rem dolor
          adipisci molestiae quasi ipsum quisquam? Sed veritatis iusto ipsa
          quidem mollitia?
        </TooltipContent>
      </Tooltip>
    </Container>
  )
}

export function PortalUsage() {
  const [open, setOpen] = useState(true)
  const dialogRef = useRef()
  function handleClick() {
    setOpen((o) => !o)
  }
  return (
    <Container>
      <Dialog open={open} toggle={handleClick} id="confirmation-id">
        <DialogTarget>
          <Button onClick={handleClick}>open dialog</Button>
        </DialogTarget>
        <FullscreenDialog style={{ overflowY: "auto" }} ref={dialogRef}>
          <Container>
            <DialogHeader title="Hover the title" />
            <Tooltip parentRef={dialogRef}>
              <TooltipTarget>
                <Heading
                  as="h5"
                  style={{ textDecoration: "underline" }}
                  color="blue_500"
                >
                  Hello World
                </Heading>
              </TooltipTarget>
              <TooltipContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                voluptatum nulla cupiditate, deserunt est placeat iure similique
                rem dolor adipisci molestiae quasi ipsum quisquam? Sed veritatis
                iusto ipsa quidem mollitia?
              </TooltipContent>
            </Tooltip>
            <div style={{ height: "60rem" }} />
          </Container>
        </FullscreenDialog>
      </Dialog>
    </Container>
  )
}
