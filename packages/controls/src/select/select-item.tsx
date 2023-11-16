import { forwardRef, HTMLProps } from "react"
import { Box } from "@rent_avail/core"
import { useSelectItem } from "../controls-hooks"

/**
 * Tokens can be any shape, but are required to have an id.
 */
type Token = {
  id: string
  [K: string]: any
}

export interface SelectItemProps extends HTMLProps<HTMLElement> {
  tokens: Token[]
  id: string
}

export const SelectItem = forwardRef<HTMLElement, SelectItemProps>(
  function SelectItem(props, ref) {
    const { selectItemProps, visible } = useSelectItem({ ...props, ref })
    return (
      visible && (
        <Box
          {...selectItemProps}
          sx={{
            p: "2rem",
            "&:not(:last-of-type)": {
              borderBottom: (theme) => `1px solid ${theme.colors.uiSecondary}`,
            },
            "&:focus, &[aria-selected='true']": { bg: "uiSubtle" },
          }}
        />
      )
    )
  }
)
