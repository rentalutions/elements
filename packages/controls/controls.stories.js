import React, { useState } from "react"
import { Container, Stack } from "@rent_avail/layout"
import { Checkbox, Radio, Switch, Button } from "./src"

export default { title: "Packages/Controls" }

export function CheckboxUsage() {
  return <Checkbox />
}

export function ButtonUsage() {
  const [loading, set] = useState(false)
  function fakeFetch() {
    set(true)
    setTimeout(() => {
      set(false)
    }, (Math.random() + 0.5) * 5000)
  }
  return (
    <Container my="4rem">
      <Stack alignItems="start">
        <Button variant="primary" loading={loading} onClick={fakeFetch}>
          submit
        </Button>
        <Button>go back</Button>
        <Button disabled onClick={(e) => console.log("uh oh")}>
          not allowed
        </Button>
        <Button variant="danger" borderColor="red_500">
          Don't do this
        </Button>
        <Button color="purple_500" borderColor="purple_500">
          premium content
        </Button>
      </Stack>
    </Container>
  )
}

export function RadioUsage() {
  return <Radio />
}

export function SwitchUsage() {
  return <Switch />
}
