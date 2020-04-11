import React from "react"
import { render } from "@testing-library/react"
import Avatar from "./src"

describe("<Avatar />", () => {
  test("It renders the component with a name.", () => {
    const { getByText } = render(<Avatar name="Patrick Krawczykowski" />)
    expect(getByText("Patrick Krawczykowski")).not.toBeNull()
  })
  test("It renders the component without a name when small.", () => {
    const { getByText } = render(
      <Avatar small initials="PK" name="Patrick Krawczykowski" />
    )
    const result = getByText("PK")
    expect(result).not.toHaveTextContent("Patrick Krawczykowski")
  })
})
