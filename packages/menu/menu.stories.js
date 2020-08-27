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
    <>
      <Flex justifyContent="space-between">
        <Menu>
          <MenuTarget>
            <Button>open `b l`</Button>
          </MenuTarget>
          <MenuList>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuTarget>
            <Button>open `b r`</Button>
          </MenuTarget>
          <MenuList>
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
            <Button>open `t l`</Button>
          </MenuTarget>
          <MenuList>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuTarget>
            <Button>open `t l`</Button>
          </MenuTarget>
          <MenuList>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
            <MenuItem>thing</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
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
                  <Button>open `b l`</Button>
                </MenuTarget>
                <MenuList>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                </MenuList>
              </Menu>
              <Menu parentRef={dialogRef}>
                <MenuTarget>
                  <Button>open `b r`</Button>
                </MenuTarget>
                <MenuList>
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
                  <Button>open `t l`</Button>
                </MenuTarget>
                <MenuList>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                </MenuList>
              </Menu>
              <Menu parentRef={dialogRef}>
                <MenuTarget>
                  <Button>open `t r`</Button>
                </MenuTarget>
                <MenuList>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                  <MenuItem>thing</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Container>
          <Box height="0rem" />
        </ConfirmationDialog>
      </Dialog>
    </Container>
  )
}
