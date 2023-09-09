// @ts-nocheck

import { useState, Fragment } from "react"
import { Select, SelectInput, SelectItem, SelectList } from "../src"

export function SelectStory() {
  const options = [
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "Arizona", value: "AZ" },
    { label: "Arkansas", value: "AR" },
    { label: "California", value: "CA" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
  ]
  // This is funny cause it's truly state state.
  const [state, setState] = useState(options[0].value)
  return (
    <Fragment>
      <p>Selected State: {state}</p>
      <Select
        id="select-id"
        onSelect={(value) => setState(value)}
        defaultValue={options[0].value}
      >
        <SelectInput label="Choose a state" />
        <SelectList>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value} label={label}>
              {label}
            </SelectItem>
          ))}
        </SelectList>
      </Select>
    </Fragment>
  )
}
