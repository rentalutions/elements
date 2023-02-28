import { SXObject, Box } from "@rent_avail/core"
import { ComponentPropsWithRef, ComponentType, forwardRef } from "react"

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: "primary" | "default" | "subtle" | "danger" | "success"
  sx?: SXObject
  as?: ComponentType<any>
}

const variants = {
  default: {
    borderColor: "action",
    color: "action",
    "&:hover, &:active": {
      bg: "action",
      color: "ui",
    },
  },
  primary: {
    bg: "action",
    color: "ui",
    "&:hover, &:active": {
      bg: "actionSecondary",
      color: "ui",
    },
  },
  subtle: {
    color: "action",
    "&:hover, &:active": {
      bg: "actionSubtle",
    },
  },
  success: {
    color: "textSuccess",
    bg: "successSecondary",
    "&:hover, &:active": {
      bg: "success",
    },
  },
  danger: {
    color: "error",
    borderColor: "error",
    "&:hover, &:active": {
      bg: "errorSecondary",
    },
  },
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  { variant = "default", as = "button", sx = {}, ...props },
  ref
) {
  return (
    <Box
      as={as}
      ref={ref}
      {...props}
      sx={{
        appearance: "none",
        position: "relative",
        py: "1rem",
        px: "2rem",
        bg: "transparent",
        border: "2px solid transparent",
        borderRadius: ({ buttonRadius }) => buttonRadius,
        fontFamily: "body",
        fontSize: "body",
        fontWeight: "black",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        transition:
          "all 200ms ease-in-out, outline-width 1ms, outline-offset 1ms",
        cursor: "pointer",
        "&:disabled": {
          bg: "ui_300",
          color: "ui_700",
          borderColor: "transparent",
          cursor: "not-allowed",
          "&:hover": { bg: "avail.uiSubtle", color: "avail.textDisabled" },
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
    />
  )
})
