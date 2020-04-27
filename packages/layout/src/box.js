import React from "react"
import styled from "styled-components"
import {
  space,
  layout,
  color,
  flexbox,
  background,
  border,
} from "styled-system"

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  layout,
  color,
  flexbox,
  background,
  border
)

export default Box
