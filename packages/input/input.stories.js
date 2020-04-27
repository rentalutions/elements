import React, { Fragment } from "react"
import Input from "./src"

export default { title: "Input" }

export function InputUsage() {
  return (
    <Fragment>
      <Input label="Full Name" required error="Must Have A Name" mb="3rem" />
      <Input label="Optional Field" mb="3rem" />
      <Input label="Birth Date" type="date" mb="3rem" required />
    </Fragment>
  )
}
