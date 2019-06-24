import React, { PureComponent } from "react"
import { storiesOf } from "@storybook/react"
import { FullPageModal, Button } from "../src/"

class Toggle extends PureComponent {
  state = { toggle: false }
  handleToggle = (e=new Event("toggle"))=> {
    e.preventDefault()
    this.setState({ toggle: !this.state.toggle })
  }
  render() {
    return this.props.children(this.state.toggle, this.handleToggle)
  }
}


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
  .add("Inline Styling", () => (
    <Toggle>
      {(show, onHide) => (
        <div>
          <button onClick={onHide}>Show</button>
          <FullPageModal
            show={show}
            onHide={onHide}
            style={{
              background: "url(http://1-background.com/images/stars-1/beautiful-blue-stars-fill.jpg)",
              backgroundSize: "201px",
              transformOrigin: "50% 100%",
              transform: "perspective(200px) rotateX(13deg) scale(2)"
            }}
          >
            <marquee
              direction="up"
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "gold",
                textAlign: "justify",
                height: "100vh",
                width: "50vw",
                margin: "0 auto",
                display: "block"
              }}
            >
              <div style={{textAlign: "center"}}>
                Episode VIII<br /><br />
                THE LAST JEDI<br /><br />
              </div>
              The FIRST ORDER reigns. Having decimated the peaceful Republic, Supreme Leader Snoke now deploys his merciless legions to seize military control of the galaxy.<br /><br />
              Only General Leia Organa’s band of RESISTANCE fighters stand against the rising tyranny, certain that Jedi Master Luke Skywalker will return and restore a spark of hope to the fight.<br /><br />
              But the Resistance has been exposed. As the First Order speeds toward the rebel base, the brave heroes mount a desperate escape....
            </marquee>
          </FullPageModal>
        </div>
      )}
    </Toggle>
  ))
