import { SXObject, Box } from "@rent_avail/core"
import { ComponentPropsWithRef, ComponentType, forwardRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: keyof typeof variants
  sx?: SXObject
  as?: ComponentType<any>
  loading: boolean
}

const variants = {
  default: {
    borderColor: "interactive.default",
    color: "interactive.default",
    "&:hover, &:active": {
      bg: "interactive.hover",
      color: "text.inverse",
    },
  },
  primary: {
    bg: "interactive.focus",
    color: "text.inverse",
    "&:hover, &:active, &:focus": {
      bg: "interactive.default",
    },
  },
  subtle: {
    color: "background.secondary",
    "&:hover, &:active": {
      bg: "actionSubtle",
    },
  },
  success: {
    color: "status.success",
    borderColor: "status.success",
    "&:hover, &:active": {
      bg: "status.success",
      color: "text.primary",
    },
  },
  danger: {
    color: "status.error",
    borderColor: "status.error",
    "&:hover, &:active": {
      bg: "status.error",
      color: "text.inverse",
    },
  },
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  { variant = "default", as = "button", sx = {}, children, ...props },
  ref
) {
  return (
    <Box
      as={as}
      ref={ref}
      {...props}
      sx={{
        appearance: "none",
        display: "inline-flex",
        justifyContent: "center",
        position: "relative",
        py: "1rem",
        px: "2rem",
        bg: "transparent",
        border: "2px solid transparent",
        borderRadius: "button",
        fontFamily: "body",
        fontSize: "body",
        fontWeight: "black",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        pointerEvents: props.loading ? "none" : "auto",
        transition:
          "all 200ms ease-in-out, outline-width 1ms, outline-offset 1ms",
        cursor: "pointer",
        "&:disabled": {
          bg: "background.secondary",
          color: "text.secondary",
          borderColor: "transparent",
          cursor: "not-allowed",
          "&:hover": { color: "text.subtle", bg: "text.secondary" },
        },
        "&:focus": {
          outline: "none",
        },
        "&:focus-visible": {
          outline: `2px solid currentColor`,
          outlineOffset: 2,
        },
        ...variants[variant],
        ...sx,
      }}
    >
      <AnimatePresence>
        {props.loading && (
          <Box
            as={motion.svg}
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            sx={{
              position: "absolute",
              left: "50%",
              translate: "-50%",
              width: "2rem",
              height: "2rem",
              fill: "none",
            }}
          >
            <Box
              as={motion.circle}
              cx={12}
              cy={12}
              r={10}
              strokeDasharray="0 1"
              sx={{
                strokeWidth: 4,
                strokeLinecap: "round",
                stroke: "currentcolor",
              }}
              animate={{ pathLength: [0, 1, 0], rotate: [0, 360, 720] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            />
          </Box>
        )}
      </AnimatePresence>
      <Box
        key="content"
        as={motion.span}
        children={children}
        animate={{ opacity: props.loading ? 0 : 1 }}
      />
    </Box>
  )
})
