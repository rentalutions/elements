import React from "react"
import { render, screen } from "#testing"
import { Grid, Col } from "../src"

describe("<Grid />", () => {
  it("renders without crashing", () => {
    render(
      <Grid>
        <Col>
          <h1>Grid Test</h1>
        </Col>
      </Grid>
    )
    const heading = screen.getByText(/Grid Test/)
    expect(heading).toBeInTheDocument()
  })
  // it("Renders as a full width column with no span prop.", () => {
  //   render(
  //     <Grid>
  //       <Col data-testid="column">
  //         <h1>Hello World</h1>
  //       </Col>
  //     </Grid>
  //   )
  //   const element = screen.getByTestId("column")
  //   screen.debug(element)
  //   expect(element).toHaveStyle(`
  //     grid-column: 1 / -1;
  //   `)
  // })
})
