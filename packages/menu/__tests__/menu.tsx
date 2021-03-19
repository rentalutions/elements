import React from "react"
import { render } from "#testing"
import { Menu, MenuTarget, MenuList, MenuItem } from "../src"

describe("<Menu />", () => {
  it("Should render the menu without breaking.", () => {
    const { getByText } = render(
      <Menu>
        <MenuTarget>
          <a>looky here</a>
        </MenuTarget>
        <MenuList>
          <MenuItem>
            <a>a menu item</a>
          </MenuItem>
        </MenuList>
      </Menu>
    )
    expect(getByText(/looky here/)).toBeInTheDocument()
  })
})
