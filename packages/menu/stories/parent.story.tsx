import React, { useRef } from "react"
import { Button } from "@rent_avail/controls"
import { Box } from "@rent_avail/core"
import { Menu, MenuTarget, MenuList, MenuItem } from "../src"

export default function ParentRefUsage() {
  const parentRefBl = useRef(null)
  const parentRefBr = useRef(null)
  const parentRefTl = useRef(null)
  const parentRefTr = useRef(null)
  return (
    <>
      <Box as="div" sx={{ float: "left" }}>
        <Menu parentRef={parentRefBl}>
          <MenuTarget>
            <Button>open `b l`</Button>
          </MenuTarget>
          <MenuList sx={{ zIndex: "0" }}>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
          </MenuList>
        </Menu>
        <Box as="div" ref={parentRefBl} />
      </Box>
      <Box as="div" sx={{ float: "right" }}>
        <Menu parentRef={parentRefBr}>
          <MenuTarget>
            <Button>open `b r`</Button>
          </MenuTarget>
          <MenuList>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
          </MenuList>
          <Box as="div" ref={parentRefBr} />
        </Menu>
      </Box>
      <Box sx={{ height: "calc(100vh - 10rem)" }} />
      <Box as="div" sx={{ float: "left" }}>
        <Menu parentRef={parentRefTl}>
          <MenuTarget>
            <Button>open `t l`</Button>
          </MenuTarget>
          <MenuList>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
          </MenuList>
        </Menu>
        <Box as="div" ref={parentRefTl} />
      </Box>
      <Box as="div" sx={{ float: "right" }}>
        <Menu parentRef={parentRefTr}>
          <MenuTarget>
            <Button>open `t r`</Button>
          </MenuTarget>
          <MenuList>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
            <MenuItem>
              <a href="#">thing</a>
            </MenuItem>
          </MenuList>
        </Menu>
        <Box as="div" ref={parentRefTr} />
      </Box>
    </>
  )
}
