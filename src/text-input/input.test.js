import React, { useState } from "react"
import { render, fireEvent } from "@testing-library/react"
import Input from "src/text-input"
import { Home } from "react-feather"

describe("<Input />", () => {
  test("It renders the correct label.", () => {
    const { container } = render(<Input label="Some Label" />)
    const label = container.querySelector(".label")
    expect(label).toHaveTextContent("Some Label")
  })

  test("It renders an icon when present.", () => {
    const { container } = render(
      <Input label="Some Label" icon={Home} data-testid="icon-input" />
    )
    const icon = container.querySelector(".input__icon")
    expect(icon).toBeInTheDocument()
  })

  test("It updates value without passing an onChange function.", () => {
    const { getByTestId } = render(<Input label="Test Input" data-testid="test-input" />)
    const input = getByTestId("test-input")
    const value = "something"
    fireEvent.change(input, { target: { value } })
    expect(input).toHaveValue(value)
  })

  test("It updates internal value when onChange is used", () => {
    const Component = () => {
      const [state, set] = useState("")
      return (
        <Input
          label="Test Input"
          data-testid="test-input"
          onChange={e => set(e.target.value)}
          value={state}
        />
      )
    }
    const { getByTestId } = render(<Component />)
    const input = getByTestId("test-input")
    const value = "woah"
    fireEvent.change(input, { target: { value } })
    expect(input).toHaveValue(value)
  })
})
