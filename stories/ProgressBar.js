import React from "react"
import { storiesOf } from "@storybook/react"
import ProgressBar from "../src/ProgressBar"

export default storiesOf("Progress Bar", module).add("Basic", () => (
  <ProgressBar
    steps={[
      { title: "Lease Drafted", complete: true },
      { title: "Lease Sent For Signing", complete: true },
      { title: "Tenants Signed", complete: true },
      { title: "Lease Finalized", complete: false },
      { title: "Online Payments Setup", complete: false }
    ]}
  />
))

const Alt = () => (
  <ProgressBar>
    <Bar title="Lease Drafted" complete={false} />
    <Bar title="Lease Sent for Signing" complete={false} />
    <Bar title="Lease Sent for Signing" complete={false} />
  </ProgressBar>
)
