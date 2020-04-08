import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Tag from "src/tag"

describe("<Tag/>", () => {
  it("Should render a tag component.", () => {
    const { getByTestId } = render(<Tag data-testid="tag-test-id" />)
    expect(getByTestId("tag-test-id")).not.toBeNull()
  })
  it("Should render a label if the filter prop is present.", async () => {
    const { getByTestId, container } = render(<Tag select data-testid="filter-tag" />)
    const input = getByTestId("filter-tag")
    const element = container.firstChild
    expect(input).not.toBeChecked()
    fireEvent.click(element)
    expect(input).toBeChecked()
  })
})
