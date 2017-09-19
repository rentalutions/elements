import React from "react"
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
  .add("Basic", () => <Avatar initials="JK" />)
  .add("With name", () => (
    <div>
      <Avatar initials="JK" indicator="#404040" name="Laurence Jankelow" />
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

storiesOf("Full Page Modal", module).add("Basic", () => (
  <FullPageModal>
    {toggle => <Button onClick={toggle}>Click me to open the modal</Button>}
  </FullPageModal>
))

storiesOf("Card", module).add("Basic", () => <Card title="hello react card" />)
