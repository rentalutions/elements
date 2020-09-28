import React, { useState } from "react"
import { Container } from "@rent_avail/layout"
import { Calendar } from "react-feather"
import Input from "./src"

export default { title: "Input" }

export function InputUsage() {
  const [name, setName] = useState("")
  const [color, setColor] = useState("")
  return (
    <Container>
      <Input
        label="Full Name"
        required
        error="Must Have A Name"
        mb="3rem"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Optional Field"
        mb="3rem"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Input
        icon={Calendar}
        label="Birth Date"
        type="date"
        mb="3rem"
        required
      />
    </Container>
  )
}
