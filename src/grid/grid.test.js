import React from "react"
import { render } from "@testing-library/react"
import { Grid, Col } from "src/grid"

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
      grid-column: auto / span 12;
    `)
  })

  it("Renders 12 column widths with the span prop.", () => {
    const { getByTestId } = render(
      <Grid>
        <Col span={[12]} data-testid="column">
          <h1>Hello World</h1>
        </Col>
      </Grid>
    )
    const column = getByTestId("column")
    expect(column).toHaveStyle(`
      grid-column: auto / span 12;
    `)
  })
})
