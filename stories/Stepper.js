import React from "react"
import { storiesOf } from "@storybook/react"
import { Stepper, Step } from "../src"
import styled from "styled-components"

export default storiesOf("Stepper", module).add("Basic", () => (
  <Stepper>
    <Step active title="hello world">
      hello world
    </Step>
    <Step active={false} title="hello world">
      hello world
    </Step>
    <Step active={false} title="hello world">
      hello world
    </Step>
  </Stepper>
))
