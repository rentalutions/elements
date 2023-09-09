import { forwardRef, useContext } from "react"
import styled from "styled-components"
import { Box } from "@rent_avail/core"
import { X } from "react-feather"
import { DialogContext } from "./dialog-context"

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
      {title && <Box as="h5">{title}</Box>}
      <X className="dialog__close" onClick={toggle} />
    </HeaderWrapper>
  )
}

export const DialogHeader = forwardRef(Header)
