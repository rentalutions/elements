import { ComponentType, PropsWithChildren, HTMLProps } from "react"
import { SXObject, Box } from "@rent_avail/core"
import { wrapEvent } from "@rent_avail/utils"

interface ActionProps extends HTMLProps<HTMLAnchorElement & HTMLButtonElement> {
  icon: ComponentType<any>
  sx?: SXObject
  as?: any
}

function useAction({ onKeyDown, ...props }: any) {
  function handleKeyDown({ key, target }) {
    if (key === "Enter" || key === " ") target.click()
  }
  return {
    wrapperProps: {
      ...props,
      as: "button",
      type: "button",
      onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
    },
    iconProps: {
      "aria-hidden": true,
    },
  }
}

/**
 * Action: a user interactive element with a contextual icon.
 *
 * @example
 * <Action icon={Palette}>Change Color Scheme</Action>
 */

export function Action({
  icon,
  children,
  sx = {},
  ...props
}: PropsWithChildren<ActionProps>) {
  const { wrapperProps, iconProps } = useAction(props)
  return (
    <Box
      {...wrapperProps}
      sx={{
        all: "unset",
        display: "inline-flex",
        gap: "0.5rem",
        color: "action",
        cursor: "pointer",
        "&:focus": { outline: "2px solid currentColor", outlineOffset: 2 },
        "&:hover": { color: "actionSecondary" },
        ...sx,
      }}
    >
      <Box {...iconProps} as={icon} />
      <Box as="span" sx={{ fontWeight: "black" }}>
        {children}
      </Box>
    </Box>
  )
}
