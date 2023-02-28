import { forwardRef, HTMLProps } from "react"
import { Box, SXObject } from "@rent_avail/core"
import { useDiscreteControl } from "./controls-hooks"

interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  label?: string
  sx?: SXObject
  id: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ sx = {}, ...props }, ref) {
    const { label, wrapperProps, inputProps, labelProps } = useDiscreteControl({
      ...props,
      ref,
    })
    return (
      <Box
        {...wrapperProps}
        as="label"
        sx={{
          position: "relative",
          display: "inline-flex",
          gap: "1rem",
          "& input:checked ~ .checkbox": {
            bg: "blue_500",
            stroke: "ui_100",
          },
          ...sx,
        }}
      >
        <Box {...inputProps} as="input" />
        <Box
          as="svg"
          viewBox="0 0 24 24"
          className="checkbox"
          sx={{
            flexShrink: 0,
            height: "2rem",
            bg: "transparent",
            border: `2px solid transparent`,
            borderColor: "blue_500",
            borderRadius: 2,
            cursor: "pointer",
            fill: "none",
            transition: "200ms",
            stroke: "transparent",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            strokeWidth: 2,
            width: "2rem",
          }}
        >
          <polyline points="20 6 9 17 4 12" />
        </Box>
        {label && (
          <Box {...labelProps} as="span" sx={{ text: "body" }}>
            {label}
          </Box>
        )}
      </Box>
    )
  }
)
