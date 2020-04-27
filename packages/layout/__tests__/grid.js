import React from "react"
import { render } from "testing-utils"
import { Grid, Col } from "../src"

describe("<Grid />", () => {
  it("Renders as a full width column with no span prop.", () => {
    const { getByTestId } = render(
      <Grid>
        <Col data-testid="column">
          <h1>Hello World</h1>
        </Col>
      </Grid>
    )
    const element = getByTestId("column")
    expect(element).toHaveStyle(`
      grid-column: 1 / -1;
    `)
  })
})
