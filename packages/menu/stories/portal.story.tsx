import React, { useState } from "react"
import { Button } from "@rent_avail/controls"
import { Container, Flex, Box } from "@rent_avail/core"
import {
  ConfirmationDialog,
  Dialog,
  DialogHeader,
  DialogTarget,
} from "@rent_avail/dialog/src"
import { Menu, MenuTarget, MenuList, MenuItem } from "../src"

export default function PortalUsage() {
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
        <ConfirmationDialog
          sx={{ overflowY: "auto", maxWidth: "75rem", width: "75rem" }}
        >
          <Container>
            <DialogHeader title="Open and scroll" />
            <Flex sx={{ justifyContent: "space-between" }}>
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
            <Box sx={{ height: "30rem" }} />
            <Flex sx={{ justifyContent: "space-between" }}>
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
