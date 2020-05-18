import React, { useState } from "react"
import { Checkbox, Radio, Switch, Button } from "./src"

export default { title: "Controls" }

export function CheckboxUsage() {
  return <Checkbox />
}

export function ButtonUsage() {
  const [disabled, set] = useState(false)
  return (
    <div>
      <Button disabled={disabled} onClick={(e) => set(true)}>
        {disabled ? "Disabled text" : "Hello World"}
      </Button>
      <Button variant="primary">Hello World</Button>
      <Button disabled>Hello World</Button>
      <Button color="red_500">Hello World</Button>
    </div>
  )
}

export function RadioUsage() {
  return <Radio />
}

export function SwitchUsage() {
  return <Switch />
}
