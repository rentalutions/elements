import { forwardRef, HTMLProps, memo } from "react"
import clsx from "clsx"
import { Box, SXObject } from "@rent_avail/core"
import { useTextControl } from "./controls-hooks"

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string
  error?: string | boolean
  help?: string
  sx?: SXObject
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { sx = {}, className, ...props },
  ref
) {
  const {
    label,
    error,
    raised,
    help,
    errorProps,
    helpProps,
    labelProps,
    textFieldProps,
  } = useTextControl({ ...props, ref })
  return (
    <Box
      as="label"
      className={clsx(className, { raised, error })}
      sx={{
        position: "relative",
        display: "inline-block",
        pb: "2rem",
        "&:is(:focus-within, .raised) .label": {
          transform: "scale(0.75) translateY(-50%)",
          color: "ui_900",
        },
        "&:is(:focus-within, .raised) .input": {
          borderColor: "primary",
        },
        "&:is(.error) .input": {
          borderColor: "status.error",
        },
        ...sx,
      }}
    >
      <Box
        {...labelProps}
        as="span"
        className="label"
        sx={{
          position: "absolute",
          left: "2rem",
          top: "2rem",
          transition: "120ms",
          transformOrigin: "left top",
          text: "body",
          color: "ui_700",
        }}
      >
        {label}
      </Box>
      <Box
        {...textFieldProps}
        as="input"
        className="input"
        sx={{
          border: "2px solid transparent",
          borderColor: "ui_500",
          borderRadius: "0.25rem",
          color: "ui_900",
          px: "2rem",
          pt: "calc(3rem - 2px)",
          pb: "calc(1rem - 2px)",
          fontFamily: "body",
          text: "body",
          outline: "none",
          width: "100%",
          bg: "transparent",
        }}
      />
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          left: "0",
          top: "calc(100% - 2rem)",
          height: "2rem",
          width: "100%",
        }}
      >
        <Box
          {...errorProps}
          as="span"
          className="error"
          sx={{
            color: "status.error",
            mr: "auto",
            text: "small",
          }}
        >
          {error}
        </Box>
        <Box
          {...helpProps}
          className="help"
          as="span"
          sx={{
            color: "text.secondary",
            ml: "auto",
            maxWidth: "100%",
            textAlign: "right",
            text: "small",
          }}
        >
          {help}
        </Box>
      </Box>
    </Box>
  )
})
