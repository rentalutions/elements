import React from "react"
import { render } from "testing-utils"
import Avatar from "../src"

describe("<Avatar />", () => {
  it("renders the component without crashing", () => {
    const { container } = render(<Avatar />)
    expect(container).not.toBeNull()
  })
  it("renders the component with initials when set", () => {
    const initials = "PK"
    const { getByText } = render(<Avatar small initials={initials} />)
    const element = getByText(initials)
    expect(element).not.toBeUndefined()
  })
  it("does not render initials when small prop isn't set", () => {
    const initials = "PK"
    const { queryByText } = render(<Avatar initials={initials} />)
    const element = queryByText(initials)
    expect(element).toBeNull()
  })
})
