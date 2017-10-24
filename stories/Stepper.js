import React from "react"
import { storiesOf } from "@storybook/react"
import { BrowserRouter as Router } from "react-router-dom"
import Stepper, { Step } from "../src/Stepper"
import styled from "styled-components"

export default storiesOf("Stepper", module).add("Basic", () => (
  <Router>
    <Stepper>
      <Step path="hello-world" title="Step One">
        Change the World
      </Step>
      <Step path="good-job" title="Step Two">
        Ball Toooooo Hard
      </Step>
      <Step path="rent-now" title="Step Three">
        Damn Soneeeeee You goooood
      </Step>
    </Stepper>
  </Router>
))
