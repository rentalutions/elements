import React from "react"
import { storiesOf } from "@storybook/react"
import TextEditor from "../src/TextEditor"

export default storiesOf("TextEditor", module).add("Basic", () => (
  <TextEditor />
))
