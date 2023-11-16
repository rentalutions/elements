import { forwardRef, HTMLProps, useState } from "react"
import { Box, SXObject } from "@rent_avail/core"
import { useDiscreteControl } from "./controls-hooks"

interface SwitchProps extends HTMLProps<HTMLInputElement> {
  sx?: SXObject
}

/**
 * Switch
 *
 * Switches should be used when the user action results in immedate change of data or
 * state. Switches should be used in place of checkboxes or radio buttons if the choice is
 * binary and multiple options on the page are not mutually exclusive. To see helpful
 * examples go to https://design.avail.co/elements/switches
 */

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { sx, ...props },
  ref
) {
  const { label, checked, wrapperProps, inputProps, labelProps } =
    useDiscreteControl({
      ...props,
      ref,
    })
  return (
    <Box
      as="label"
      {...wrapperProps}
      sx={{
        alignItems: "center",
        appearance: "none",
        p: 0,
        border: "none",
        borderRadius: "1rem",
        bg: checked ? "blue_500" : "ui_500",
        display: "inline-flex",
        height: "2rem",
        width: "4rem",
        transition: "120ms",
      }}
    >
      <Box {...inputProps} as="input" />
      <Box
        role="presentation"
        className="switch__thumb"
        sx={{
          width: "2rem",
          height: "2rem",
          bg: "ui_100",
          borderRadius: "4rem",
          border: (theme) =>
            `4px solid ${
              checked ? theme.colors.blue_500 : theme.colors.ui_500
            }`,
          transform: checked ? "translateX(100%)" : "translateX(0)",
          transition: "120ms",
        }}
      />
    </Box>
  )
})
