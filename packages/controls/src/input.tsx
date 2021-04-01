import { InputHTMLAttributes } from "react"
import clsx from "clsx"
import { Box, SXObject } from "@rent_avail/core"
import { useInput } from "./use-controls"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string | boolean
  help?: string
  sx?: SXObject
}

export function Input({ sx = {}, className, ...props }: InputProps) {
  const {
    label,
    error,
    raised,
    help,
    errorProps,
    helpProps,
    inputProps,
  } = useInput(props)
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
        },
        "&.raised .input": { borderColor: "ui_700" },
        "&:focus-within .label": { color: "blue_500" },
        "&:focus-within .input": { borderColor: "blue_500" },
        "&.error .input": {
          borderColor: "red_500",
        },
        ...sx,
      }}
    >
      <Box
        as="span"
        className="label"
        sx={{
          position: "absolute",
          left: "2rem",
          top: "2.25rem",
          transition: "120ms",
          transformOrigin: "left top",
          text: "body",
          color: "ui_700",
        }}
      >
        {label}
      </Box>
      <Box
        {...inputProps}
        as="input"
        className="input"
        sx={{
          display: "block",
          border: "2px solid transparent",
          borderColor: "ui_500",
          borderRadius: 4,
          color: "ui_900",
          px: "2rem",
          pt: "3rem",
          pb: "1rem",
          text: "body",
          outline: "none",
          bg: "transparent",
          width: "100%",
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
            color: "error",
            mr: "auto",
            text: "small",
          }}
        >
          {error}
        </Box>
        <Box
          {...helpProps}
          as="span"
          className="help-text"
          sx={{
            color: "ui_700",
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
}
