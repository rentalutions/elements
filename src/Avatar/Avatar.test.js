import React from "react"
import { shallow } from "enzyme"
import Avatar from "../Avatar"

describe("Avatar", () => {
  const element = shallow(Avatar)
  it("renders without crashing", () => {
    const tree = element.toJSON()
    expect(element).toMatchSnapshot
  })
})
