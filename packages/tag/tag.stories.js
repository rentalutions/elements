import React from "react"
import Tag from "./src"
import { Check } from "react-feather"
import { Box } from "@rent_avail/layout"

export default { title: "Packages/Tag" }

export function TagUsage() {
  return (
    <Box display="flex">
      <Tag icon={Check}>Dogs</Tag>
      <Tag>Cats</Tag>
      <Tag>Parrots</Tag>
    </Box>
  )
}
