import { forwardRef, InputHTMLAttributes, memo } from "react"
import { Box, SXObject } from "@rent_avail/core"
import { useCheckbox } from "./use-controls"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  sx?: SXObject
}

export const Checkbox = memo(
  forwardRef(function Checkbox({ sx = {}, ...props }: CheckboxProps, ref) {
    const { checked, wrapperProps, inputProps, ariaProps, label } = useCheckbox(
      {
        ...props,
        ref,
      }
    )
    return (
      <Box
        {...wrapperProps}
        as="label"
        sx={{
          position: "relative",
          display: "inline-flex",
          gap: "1rem",
          "::before": {
            content: '""',
            blockSize: "5rem",
            inlineSize: "5rem",
            clipPath: "circle(50%)",
            position: "absolute",
            top: "1rem",
            left: "1rem",
            bg: "ui_300",
            transform: `translate3d(-50%, -50%, -1px) scale(0.01)`,
            willChange: "transform",
            transition: "transform 120ms",
            zIndex: 0,
          },
          "&:hover::before": {
            transform: `translate3d(-50%, -50%, -1px) scale(1)`,
          },
          ...sx,
        }}
      >
        <Box
          {...inputProps}
          as="input"
          type="checkbox"
          hidden
          sx={{
            width: 0,
            height: 0,
          }}
        />
        <Box
          {...ariaProps}
          as="svg"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          sx={{
            position: "relative",
            flexShrink: 0,
            height: "2rem",
            bg: checked ? "blue_500" : "transparent",
            border: `2px solid transparent`,
            borderColor: checked ? "blue_700" : "ui_700",
            borderRadius: 4,
            cursor: "pointer",
            width: "2rem",
            transition: "background-color 120ms, stroke-dashoffset 240ms",
            stroke: checked ? "ui_100" : "transparent",
            strokeDashoffset: checked ? "0" : "24",
            strokeDasharray: "24",
            willChange: "stroke-dashoffset, border-color, background-color",
          }}
        >
          <polyline points="20 6 9 17 4 12" />
        </Box>
        {label && (
          <Box as="span" sx={{ position: "relative", zIndex: 1 }}>
            {label}
          </Box>
        )}
      </Box>
    )
  })
)
