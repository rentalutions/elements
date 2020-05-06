import React, { memo, forwardRef, useContext } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { color, background } from "styled-system"
import { usePortal, noop } from "@rent_avail/utils"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "react-feather"
import { Container } from "@rent_avail/layout"
import { Heading } from "@rent_avail/typography"
import { DialogContext } from "./index"

const FullscreenWrapper = styled(motion.section)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.ui_100};
  ${color};
  ${background};
  .fullscreen__header {
    display: flex;
    margin-bottom: 2rem;
    svg {
      margin-left: auto;
    }
  }
  .fullscreen__close {
    cursor: pointer;
    transition: 100ms;
    &:hover {
      opacity: 0.75;
    }
  }
`

function Fullscreen({ children, title = "", ...props }, ref) {
  const target = usePortal()
  const { open, toggle, id } = useContext(DialogContext)
  if (!target) return null
  return createPortal(
    <AnimatePresence>
      {open && (
        <FullscreenWrapper
          {...props}
          key={`${id}-dialog`}
          ref={ref}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
        >
          <Container>
            <header className="fullscreen__header">
              {title && <Heading as="h5">{title}</Heading>}
              <X className="fullscreen__close" onClick={toggle} />
            </header>
            {children}
          </Container>
        </FullscreenWrapper>
      )}
    </AnimatePresence>,
    target
  )
}

export default memo(forwardRef(Fullscreen))
