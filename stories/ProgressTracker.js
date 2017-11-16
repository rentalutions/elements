import React from "react"
import { storiesOf } from "@storybook/react"
import { ProgressTracker, ProgressStep } from "../src/ProgressTracker"

export default storiesOf("Progress Tracker", module).add("Basic", () => (
  <ProgressTracker>
    <ProgressStep title="Draft Lease" complete={true} />
    <ProgressStep title="Send For Signing" complete={false} current />
    <ProgressStep title="Tenants Sign" complete={false} />
    <ProgressStep title="You Sign" complete={false} />
    <ProgressStep title="Setup Online Payments" complete={false} />
  </ProgressTracker>
))
