import React, { useRef, useState } from "react"
import { Button } from "@rent_avail/controls"
import { Container, Flex, Box } from "@rent_avail/layout"
import {
  ConfirmationDialog,
  Dialog,
  DialogHeader,
  DialogTarget,
} from "@rent_avail/dialog/src"
import { Menu, MenuTarget, MenuList, MenuItem } from "./src"

export default { title: "Menu" }

export function BasicUsage() {
  return (
    <Container>
      <Flex justifyContent="space-between">
        <Menu>
          <MenuTarget>
            <Button>open `bottom left`</Button>
          </MenuTarget>
          <MenuList position={{ y: "bottom", x: "left" }}>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuTarget>
            <Button>open `bottom right`</Button>
          </MenuTarget>
          <MenuList position={{ y: "bottom", x: "right" }}>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Box height="30rem" />
      <Flex justifyContent="space-between">
        <Menu>
          <MenuTarget>
            <Button>open `top left`</Button>
          </MenuTarget>
          <MenuList position={{ y: "top", x: "left" }}>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuTarget>
            <Button>open `top right`</Button>
          </MenuTarget>
          <MenuList position={{ y: "top", x: "right" }}>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
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
        <ConfirmationDialog
          style={{ overflowY: "auto", maxWidth: "75rem", width: "75rem" }}
          ref={dialogRef}
        >
          <Container>
            <DialogHeader title="Open and scroll" />
            <Flex justifyContent="space-between">
              <Menu parentRef={dialogRef}>
                <MenuTarget>
                  <Button>open `bottom left`</Button>
                </MenuTarget>
                <MenuList position={{ y: "bottom", x: "left" }}>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                </MenuList>
              </Menu>
              <Menu parentRef={dialogRef}>
                <MenuTarget>
                  <Button>open `bottom right`</Button>
                </MenuTarget>
                <MenuList position={{ y: "bottom", x: "right" }}>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Box height="30rem" />
            <Flex justifyContent="space-between">
              <Menu parentRef={dialogRef}>
                <MenuTarget>
                  <Button>open `top left`</Button>
                </MenuTarget>
                <MenuList position={{ y: "top", x: "left" }}>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                </MenuList>
              </Menu>
              <Menu parentRef={dialogRef}>
                <MenuTarget>
                  <Button>open `top right`</Button>
                </MenuTarget>
                <MenuList position={{ y: "top", x: "right" }}>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Container>
          <Box height="30rem" />
        </ConfirmationDialog>
      </Dialog>
    </Container>
  )
}
