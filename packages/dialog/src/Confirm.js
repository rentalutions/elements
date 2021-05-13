import React, { useContext, forwardRef } from "react"
import { createPortal } from "react-dom"
import { usePortal } from "@rent_avail/utils"
import { motion, AnimatePresence } from "framer-motion"
import { DialogContext } from "./dialogContext"
import { Box } from "@rent_avail/layout"

const backdropVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  shown: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
}

const dialogVariants = {
  hidden: { opacity: 0, scale: 1.05, x: "-50%" },
  shown: { opacity: 1, scale: 1 },
}

function useConfirmationDialog({ ref, scrimSx, title, ...rest }) {
  const target = usePortal()
  const { open, id } = useContext(DialogContext)
  return {
    target,
    open,
    scrimProps: {
      key: `${id}__scrim`,
      as: motion.div,
      variants: backdropVariants,
      initial: "hidden",
      animate: "shown",
      exit: "hidden",
    },
    dialogProps: {
      ...rest,
      ref,
      key: `${id}__confirmation`,
      as: motion.aside,
      variants: dialogVariants,
    },
  }
}

export const ConfirmationDialog = forwardRef(function ConfirmationDialog(
  { sx = {}, scrimSx = {}, ...props },
  ref
) {
  const { target, open, scrimProps, dialogProps } = useConfirmationDialog({
    ...props,
    ref,
  })
  if (!target) return null
  return createPortal(
    <AnimatePresence>
      {open && (
        <Box
          {...scrimProps}
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.24)",
            overflow: "auto",
            ...scrimSx,
          }}
        >
          <Box
            {...dialogProps}
            sx={{
              position: "absolute",
              top: "4rem",
              left: "50%",
              p: "2rem",
              mx: "auto",
              mb: "2rem",
              bg: "ui_100",
              borderRadius: 4,
              width: "calc(100% - 4rem)",
              maxWidth: "50rem",
              zIndex: 2,
              transform: "translate3d(-50%, 0, 0)",
              ...sx,
            }}
          />
        </Box>
      )}
    </AnimatePresence>,
    target
  )
})
