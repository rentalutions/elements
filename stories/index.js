import React, { PureComponent } from "react"
import { injectGlobal } from "styled-components"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import { Avatar, Button, Card, FullPageModal } from "../src"

injectGlobal`
  *,*:before,*:after {
    box-sizing: border-box;
  }
  :root {
    font-size: 18px;
    line-height: 1.334;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }
`

storiesOf("Avatar", module)
  .add("Basic", () => (
    <Avatar
      initials="JK"
      photo="https://randomuser.me/api/portraits/med/men/83.jpg"
    />
  ))
  .add("With name", () => (
    <div>
      <Avatar
        initials="JK"
        indicator="#404040"
        name="Laurence Jankelow"
        photo="https://randomuser.me/api/portraits/med/men/83.jpg"
      />
      <Avatar initials="JK" indicator="#404040" name="Kasia Manolas" />
      <Avatar initials="JK" indicator="#404040" name="Ryan Coon" />
      <Avatar initials="JK" indicator="#404040" name="Kyle Ramirez" />
    </div>
  ))
  .add("With contact information", () => (
    <Avatar
      initials="JK"
      name="Josh Keller"
      email="josh.keller@yahoo.com"
      phone="555 555 5555"
      indicator="#137BB5"
    />
  ))

storiesOf("Button", module)
  .add("Basic", () => <Button>a cool button</Button>)
  .add("Bare", () => <Button bare>a cool button</Button>)
  .add("Primary", () => <Button primary>a cool button</Button>)
  .add("Ui buttons", () => (
    <div>
      <Button bare alert>
        a cool button
      </Button>
      <Button bare warning>
        a cool button
      </Button>
      <Button bare external>
        a cool button
      </Button>
    </div>
  ))

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

storiesOf("Full Page Modal", module).add("Basic", () => <ModalContainer />)

storiesOf("Card", module).add("Basic", () => <Card title="hello react card" />)

storiesOf("Tooltip", module).add("Off right", () => (
  <div>
    <Button primary />
  </div>
))
