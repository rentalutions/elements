import React, { PureComponent } from "react"
import { storiesOf } from "@storybook/react"
import { FullPageModal, Button } from "../src/"

class ModalContainer extends PureComponent {
  state = {
    open: false
  }
  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ open: true })}>
          Hello world
        </Button>
        <FullPageModal
          open={this.state.open}
          onHide={() => this.setState({ open: false })}
          modalBody={<div>hello world</div>}
        />
      </div>
    )
  }
}

export default storiesOf("Full Page Modal", module).add("Basic", () => (
  <ModalContainer />
))
