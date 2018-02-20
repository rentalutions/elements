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
          {this.props.children}
        </FullPageModal>
      </div>
    )
  }
}

export default storiesOf("Full Page Modal", module)
  .add("Centered Content", ()=>(
    <ModalContainer>
      Boy am I glad this is centered
    </ModalContainer>
  ))
  .add("Basic", () => (
    <ModalContainer>
      <pre
        style={{
          margin: "0",
          padding: "0",
          backgroundColor: "cornflowerblue",
          height: "100vh",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "inset 0 0 0 5px tomato, inset 0 0 0 10px khaki"
        }}
      >
        Hello world
      </pre>
      <pre
        style={{
          margin: "0",
          padding: "0",
          backgroundColor: "khaki",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "inset 0 0 0 5px purple, inset 0 0 0 10px antiquewhite"
        }}
      >
        Hello world, again.
      </pre>
    </ModalContainer>
  ))
