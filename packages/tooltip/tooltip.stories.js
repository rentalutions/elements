import React, { useRef, useState } from "react"
import { Container } from "@rent_avail/layout"
import { Heading } from "@rent_avail/typography"
import {
  Dialog,
  DialogHeader,
  DialogTarget,
  FullscreenDialog,
} from "@rent_avail/dialog"
import { Button } from "@rent_avail/controls"
import { Tooltip, TooltipContent, TooltipTarget } from "./src"

export default { title: "Packages/Tooltip" }

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
  function handleClick() {
    setOpen((o) => !o)
  }
  return (
    <Container>
      <Dialog open={open} toggle={handleClick} id="confirmation-id">
        <DialogTarget>
          <Button onClick={handleClick}>open dialog</Button>
        </DialogTarget>
        <FullscreenDialog style={{ overflowY: "auto" }}>
          <Container>
            <DialogHeader title="Hover the title" />
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                voluptatum nulla cupiditate, deserunt est placeat iure similique
                rem dolor adipisci molestiae quasi ipsum quisquam? Sed veritatis
                iusto ipsa quidem mollitia?
              </TooltipContent>
            </Tooltip>
            <div style={{ height: "30rem" }} />
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                voluptatum nulla cupiditate, deserunt est placeat iure similique
                rem dolor adipisci molestiae quasi ipsum quisquam? Sed veritatis
                iusto ipsa quidem mollitia?
              </TooltipContent>
            </Tooltip>
          </Container>
        </FullscreenDialog>
      </Dialog>
    </Container>
  )
}
