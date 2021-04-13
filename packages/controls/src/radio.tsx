import { Box, SXObject } from "@rent_avail/core"
import { forwardRef, InputHTMLAttributes, memo } from "react"
import { useRadio } from "./use-controls"

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  sx?: SXObject
}

export const Radio = memo(
  forwardRef(function Radio({ sx = {}, ...props }: RadioProps, ref) {
    const { checked, wrapperProps, inputProps, ariaProps, label } = useRadio({
      ...props,
      role: "radio",
      ref,
    })
    return (
      <Box {...wrapperProps} as="label">
        <Box {...inputProps} as="input" type="radio" />
        {/* <Box
          {...ariaProps}
          sx={{
            inlineSize: "2rem",
            blockSize: "2rem",
            border: "2px solid transparent",
            borderColor: checked ? "blue_500" : "ui_700",
            borderRadius: "50%",
            bg: checked ? "blue_300" : "transparent",
          }}
        /> */}
        {label && <Box as="span">{label}</Box>}
      </Box>
    )
  })
)
