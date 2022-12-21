import React, { memo, forwardRef, useContext } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { color, background } from "styled-system"
import { usePortal } from "@rent_avail/utils"
import { motion, AnimatePresence } from "framer-motion"
import { DialogContext } from "./dialogContext"

const FullscreenWrapper = styled(motion.section)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.ui_100};
  overflow: auto;
  ${color};
  ${background};
`

function Fullscreen({ children, title = "", ...props }, ref) {
  const target = usePortal()
  const { open, id } = useContext(DialogContext)
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
          {children}
        </FullscreenWrapper>
      )}
    </AnimatePresence>,
    target
  )
}

export const FullscreenDialog = memo(forwardRef(Fullscreen))
