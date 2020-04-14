import React from "react"
import { Menu, MenuTarget, MenuList, MenuItem } from "./src"
import { Button } from "@rent_avail/controls"

export default { title: "Menu" }

export function MenuUsage() {
  return (
    <Menu>
      <MenuTarget>
        <Button>open menu</Button>
      </MenuTarget>
      <MenuList>
        <MenuItem>thing</MenuItem>
        <MenuItem>thing</MenuItem>
        <MenuItem>thing</MenuItem>
        <MenuItem>thing</MenuItem>
      </MenuList>
    </Menu>
  )
}
