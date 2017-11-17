import React from "react"
import { storiesOf } from "@storybook/react"
import { ProgressTracker, ProgressStep } from "../src/ProgressTracker"

export default storiesOf("Progress Tracker", module).add("Basic", () => (
  <ProgressTracker>
    <ProgressStep title="Draft Lease" complete={true} />
    <ProgressStep title="Send For Signing" complete={true} current />
    <ProgressStep title="Tenants Sign" complete={true} />
    <ProgressStep title="You Sign" complete={false} current />
    <ProgressStep title="Setup Online Payments" complete={false} />
  </ProgressTracker>
))
