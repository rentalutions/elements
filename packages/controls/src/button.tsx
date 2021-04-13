import styled from "styled-components"
import css from "@styled-system/css"
import { variant } from "styled-system"
import { Box, SXObject, sx } from "@rent_avail/core"
import { AnimatePresence, motion } from "framer-motion"
import { ButtonHTMLAttributes, ElementType, forwardRef, memo } from "react"

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
      outline: (theme) => `2px solid ${theme.colors.blue_300}`,
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
        "&:hover": {
          bg: "blue_100",
          borderColor: "blue_100",
          color: "blue_500",
        },
      },
      subtle: {
        color: "blue_500",
        "&:hover": { bg: "blue_100" },
      },
      danger: {
        borderColor: "red_500",
        color: "red_500",
      },
    },
  }),
  sx
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sx?: SXObject
  variant?: "default" | "primary" | "subtle" | "danger"
  icon?: JSX.Element
  loading?: boolean
  as?: ElementType | keyof JSX.IntrinsicElements
}

export const Button = memo(
  forwardRef(function Button(
    {
      sx = {},
      variant = "default",
      icon,
      loading = false,
      children,
      ...props
    }: ButtonProps,
    ref
  ) {
    return (
      <ButtonWrapper {...props} ref={ref} variant={variant}>
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
  })
)

const transition = {
  duration: 2,
  repeat: Infinity,
  repeatType: "reverse",
}

const container = {
  initial: { rotate: 0 },
  animate: { rotate: 360, transition },
}

const spinner = {
  initial: { pathLength: 1, pathOffset: 0 },
  animate: { pathLength: 0, pathOffset: 0.95 },
}

function ButtonLoader(props: any) {
  return (
    <Box
      {...props}
      as={motion.svg}
      style={{ x: "-50%" }}
      sx={{
        fill: "none",
        strokeWidth: 4,
        strokeLinecap: "round",
        stroke: "currentcolor",
        position: "absolute",
        left: "50%",
        width: "2rem",
        height: "2rem",
      }}
      variants={container}
      initial="initial"
      animate="animate"
    >
      <motion.path
        strokeDasharray="0 1"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        variants={spinner}
        initial="initial"
        animate="animate"
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </Box>
  )
}
