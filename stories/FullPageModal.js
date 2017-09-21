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
        >
          <pre style={{
            margin:"0",
            padding:"0",
            backgroundColor:"cornflowerblue",
            height:"100vh",
            color:"white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>Hello world</pre>
          <pre style={{
            margin:"0",
            padding:"0",
            backgroundColor:"khaki",
            height:"100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>Hello world, again.</pre>
        </FullPageModal>
      </div>
    )
  }
}

export default storiesOf("Full Page Modal", module).add("Basic", () => (
  <ModalContainer />
))
