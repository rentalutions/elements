import React from "react"
import { FullpageFeedback, InlineFeedback } from "./src"

export default { title: "Feedback" }

export function FullpageUsage() {
  return (
    <FullpageFeedback
      open={true}
      timeout={6000}
      onAnimationEnd={() => console.log("over")}
      steps={[
        "Getting your info",
        "Printing your check",
        "Licking the envelope"
      ]}
      successMessage="Payment Scheduled"
    />
  )
}

export function InlineUsage() {
  return <InlineFeedback steps={["Getting Info", "Stopping Check"]} />
}
