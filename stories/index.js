import React, { PureComponent } from "react"
import styled, { injectGlobal } from "styled-components"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import { Button, Card } from "../src"

import Form from "../src/Form"
import Field from "../src/Field"

import AvatarStories from "./Avatar"
import ButtonStories from "./Button"
import FullPageModalStories from "./FullPageModal"
import ProgressTracker from "./ProgressTracker"
import Stepper from "./Stepper"
import Text from "./Text"

injectGlobal`
*,*:before, *:after {
  box-sizing: border-box;
}
  :root {
    font-size: 16px;
  }
  body {
    font-family: 'Open Sans';
  }
`

storiesOf("Card", module).add("Basic", () => <Card title="hello react card" />)

const FormWrapper = styled.div`
  form {
    padding: 24px;
  }
  fieldset {
    margin-bottom: 24px;
  }
`

storiesOf("Forms", module).add("Basic", () => (
  <FormWrapper>
    <Form onSubmit={state => console.log(JSON.stringify(state))}>
      <Field name="fullName" label="Full Name" />
      <Field name="email" label="Email" />
      <Field name="password" type="password" label="Password" />
      <button type="submit">submit the form</button>
    </Form>
  </FormWrapper>
))

// storiesOf("Tooltip", module).add("Off right", () => (
//   <div>
//     <Tooltip content={<p>Steve Bruhle</p>}>
//       <Button primary />
//     </Tooltip>
//   </div>
// ))
