import styled from "styled-components"
import css from "@styled-system/css"
import { variant } from "styled-system"
import { Box, SXObject, sx } from "@rent_avail/core"
import { AnimatePresence, motion } from "framer-motion"
import { PropsWithoutRef, ReactNode } from "react"

interface ButtonWrapperProps {
  sx?: SXObject
  variant?: string
}

const ButtonWrapper = styled.button<ButtonWrapperProps>(
  css({
    py: "1rem",
    px: "2rem",
    position: "relative",
    appearance: "none",
    border: "2px solid transparent",
    borderRadius: 4,
    bg: "transparent",
    cursor: "pointer",
    textTransform: "uppercase",
    variant: "text.body",
    fontWeight: 800,
    letterSpacing: 0.5,
    transition: "120ms",
    whiteSpace: "nowrap",
    "&:focus": {
      outline: (theme) => `2px solid ${theme.colors.blue_500}`,
    },
  }),
  variant({
    scale: "buttons",
    variants: {
      default: {
        borderColor: "blue_500",
        color: "blue_500",
        "&:hover": {
          bg: "blue_500",
          color: "ui_100",
        },
      },
      primary: {
        borderColor: "blue_500",
        bg: "blue_500",
        color: "ui_100",
      },
      subtle: {
        color: "blue_500",
      },
      danger: {
        borderColor: "red_500",
        color: "red_500",
      },
    },
  }),
  sx
)

interface ButtonProps {
  sx?: SXObject
  variant?: "default" | "primary" | "subtle" | "danger"
  icon?: JSX.Element
  loading?: boolean
  children: ReactNode
}

export function Button({
  sx = {},
  variant = "default",
  icon,
  loading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonWrapper {...props} variant={variant}>
      <AnimatePresence>
        {loading && (
          <ButtonLoader
            initial={{ opacity: loading ? 1 : 0 }}
            enter={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <Box
        as={motion.span}
        initial={{ opacity: loading ? 0 : 1 }}
        animate={{ opacity: loading ? 0 : 1 }}
      >
        {children}
      </Box>
    </ButtonWrapper>
  )
}

function ButtonLoader(props: any) {
  return (
    <Box
      {...props}
      as={motion.svg}
      sx={{
        fill: "none",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        width: "2rem",
        height: "2rem",
      }}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength="1"
      />
    </Box>
  )
}
