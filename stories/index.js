import React, { PureComponent, Children } from "react"
import styled, { injectGlobal } from "styled-components"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import styles from "@sambego/storybook-styles"

import { Button, Card, Text } from "../src"

import Form from "../src/Form"
import Field from "../src/Field"

import DocumentThumbnail from "../src/DocumentThumbnail"

import AvatarStories from "./Avatar"
import ButtonStories from "./Button"
import FullPageModalStories from "./FullPageModal"
import ProgressTracker from "./ProgressTracker"
import Stepper from "./Stepper"
import TextStories from "./Text"
import TextEditorStories from "./TextEditorStories"

injectGlobal`
  *,*:before, *:after {
    box-sizing: border-box;
  }
  :root {
    font-size: 16px;
    --ui-dark: #2F373D;
    --ui-semi-dark: #6C757A;
    --ui: #ACB4B8;
    --ui-semi-light-alt: #BCCCD6;
    --ui-semi-light: #EBF1F5;
    --ui-light: #F9F8F8;

    --primary-dark: #364046;
    --primary-semi-dark: #7E8A91;
    --primary: #077DB8;
    --primary-semi-light: #DDE1E2;
    --primary-light: #D7EAF5;

    --external-dark: #34113D;
    --external-semi-dark: #63057A;
    --external: #9407B8;
    --external-semi-light: #E9BAF5;
    --external-light: #EFD7F5;

    --danger-dark: #3D1311;
    --danger-semi-dark: #990B06;
    --danger: #D6413C;
    --danger-semi-light: #F5BCBA;
    --danger-light: #F5D8D7;

    --warning-dark: #3D3111;
    --warning-semi-dark: #7A5C0A;
    --warning: #F5C60A;
    --warning-semi-light: #F5E5BA;
    --warning-light: #F2EAD5;

    --success-dark: #023D34;
    --success-semi-dark: #057A69;
    --success: #069985;
    --success-semi-light: #A3D6CE;
    --success-light: #D7F5F1;
  }
  body {
    font-family: 'Open Sans';
    margin: 0;
    padding: 0;
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

const DocThumbWrapper = styled.section`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  padding: 12px;
  .doc {
    flex-basis: 33%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    background-color: var(--ui-light);
    &:not(:last-of-type) {
      margin-right: 12px;
    }
    summary {
      padding: 12px;
    }
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

storiesOf("Doc Thumbnail", module)
  .addDecorator(
    styles({
      margin: 0,
      padding: 0,
      background: "#f2f2f2",
      minHeight: "100vh"
    })
  )
  .add("Something", () => (
    <DocThumbWrapper>
      <div className="doc">
        <DocumentThumbnail />
        <summary>
          <Text subtitle>Hello World</Text>
          <Text>we don't have much time</Text>
        </summary>
      </div>
      <div className="doc">
        <DocumentThumbnail />
        <summary>
          <Text subtitle>Hello World</Text>
          <Text>we don't have much time</Text>
        </summary>
      </div>
      <div className="doc">
        <DocumentThumbnail />
        <summary>
          <Text subtitle>Hello World</Text>
          <Text>we don't have much time</Text>
        </summary>
      </div>
    </DocThumbWrapper>
  ))

// storiesOf("Tooltip", module).add("Off right", () => (
//   <div>
//     <Tooltip content={<p>Steve Bruhle</p>}>
//       <Button primary />
//     </Tooltip>
//   </div>
// ))
