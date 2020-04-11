import React from "react"
import Chip from "./src"
import { Check } from "react-feather"
import { Box } from "@rent_avail/layout"

export default { title: "Chip" }

export function ChipUsage() {
  return (
    <Box display="flex">
      <Chip icon={Check}>Dogs</Chip>
      <Chip>Cats</Chip>
      <Chip>Parrots</Chip>
    </Box>
  )
}
