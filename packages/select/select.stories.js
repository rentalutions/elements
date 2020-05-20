import React, { useState } from "react"
import { Container } from "@rent_avail/layout"
import { Select, SelectInput, SelectList, SelectItem } from "./src"

export default { title: "Select" }

function SelectExample() {
  const options = [
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "Arizona", value: "AZ" },
    { label: "Arkansas", value: "AR" },
    { label: "California", value: "CA" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
  ]
  const [state, setState] = useState("")
  return (
    <Container mt="4rem">
      <Select id="select-id" onSelect={(value) => setState(value)}>
        <SelectInput label="Choose a state" />
        <SelectList>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value} label={label}>
              {label}
            </SelectItem>
          ))}
        </SelectList>
      </Select>
    </Container>
  )
}

export function Basic() {
  return <SelectExample />
}
