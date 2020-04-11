import React, { useContext, forwardRef, Fragment } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { usePortal } from "@rent_avail/utils"
import { Heading } from "@rent_avail/typography"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "react-feather"
import { DialogContext } from "./index"

const ConfirmationWrapper = styled(motion.section)`
  position: fixed;
  top: 4rem;
  left: 50%;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
  background: ${({ theme }) => theme.colors.ui_100};
  border-radius: 0.25rem;
  width: 100%;
  max-width: 50rem;
  z-index: 2;
  transform: translate3d(-50%, 0, 0);
  .confirmation__header {
    display: flex;
    margin-bottom: 2rem;
  }
  .confirmation__close {
    cursor: pointer;
    margin-left: auto;
    &:hover {
      opacity: 0.75;
    }
  }
`

const Scrim = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.24);
`

function Confirmation({ children, title = "", ...props }, ref) {
  const target = usePortal()
  const { open, toggle, id } = useContext(DialogContext)
  console.log(open, toggle)
  return createPortal(
    <AnimatePresence>
      {open && (
        <Fragment>
          <Scrim
            key={`${id}-skrim`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <ConfirmationWrapper
            {...props}
            key={`${id}-dialog`}
            ref={ref}
            initial={{ opacity: 0, scale: 1.05, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, scale: 1.05 }}
          >
            <header className="confirmation__header">
              {title && <Heading as="h5">{title}</Heading>}
              <X className="confirmation__close" onClick={toggle} />
            </header>
            {children}
          </ConfirmationWrapper>
        </Fragment>
      )}
    </AnimatePresence>,
    target
  )
}

export default forwardRef(Confirmation)
