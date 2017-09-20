import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { storiesOf } from "@storybook/react"
import { Button } from "../src/"

export default storiesOf("Button", module)
  .add("Basic", () => <Button>a cool button</Button>)
  .add("Bare", () => <Button bare>a cool button</Button>)
  .add("Primary", () => <Button primary>a cool button</Button>)
  .add("Ui buttons", () => (
    <Router>
      <div>
        <Button bare success>
          success button
        </Button>
        <Button to="/hello" bare alert>
          alert button
        </Button>
        <Button bare warning onClick={() => console.log("Not Disabled")}>
          warning button
        </Button>
        <Button bare external>
          external button
        </Button>
        <Button bare external disabled>
          disabled button
        </Button>
      </div>
    </Router>
  ))
