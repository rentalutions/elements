import React, { PureComponent } from "react"
import { storiesOf } from "@storybook/react"
import { FullPageModal, Button } from "../src/"

class ModalContainer extends PureComponent {
  state = {
    show: false
  }
  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ show: true })}>
          Hello world
        </Button>
        <FullPageModal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
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
