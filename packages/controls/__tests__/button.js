import React from "react"
import { render, screen } from "#testing"
import { Button } from "../src"

describe("<Button />", () => {
  it("renders a button without crashing", () => {
    const text = "Hello World"
    render(<Button>{text}</Button>)
    const button = screen.getByText(text)
    expect(button).toBeInTheDocument()
  })
  // it("renders a primary button when passed the right variant", () => {
  //   const id = "test-button"
  //   render(
  //     <Button data-testid={id} variant="primary">
  //       Hello World
  //     </Button>
  //   )
  //   const button = screen.getByRole(/button/)
  //   const style = getComputedStyle(button)
  //   console.log(style.backgroundColor)
  //   expect(button).toHaveStyle({
  //     backgroundColor: "rgb(15, 62, 111)",
  //   })
  // })
})
