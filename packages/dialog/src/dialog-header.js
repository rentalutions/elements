import React, { forwardRef, useContext } from "react"
import styled from "styled-components"
import { Box } from "@rent_avail/layout"
import { Heading } from "@rent_avail/typography"
import { X } from "react-feather"
import { DialogContext } from "./dialogContext"

const HeaderWrapper = styled(Box)`
  display: flex;
  margin-bottom: 2rem;
  .dialog__close {
    cursor: pointer;
    margin-left: auto;
    transition: 250ms;
    &:hover {
      opacity: 0.75;
    }
  }
`

function Header({ title = null, ...props }, ref) {
  const { toggle } = useContext(DialogContext)
  return (
    <HeaderWrapper {...props} ref={ref} as="header">
      {title && <Heading as="h5">{title}</Heading>}
      <X className="dialog__close" onClick={toggle} />
    </HeaderWrapper>
  )
}

export const DialogHeader = forwardRef(Header)
