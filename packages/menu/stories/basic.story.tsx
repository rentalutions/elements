import { Button } from "@rent_avail/controls"
import { Flex, Box } from "@rent_avail/core"
import { Menu, MenuTarget, MenuList, MenuItem } from "../src"

export default function BasicUsage() {
  return (
    <>
      <Flex sx={{ justifyContent: "space-between" }}>
        <Menu>
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
        <Menu>
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
        </Menu>
      </Flex>
      <Box sx={{ height: "calc(100vh - 10rem)" }} />
      <Flex sx={{ justifyContent: "space-between" }}>
        <Menu>
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
        <Menu>
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
      </Flex>
    </>
  )
}
