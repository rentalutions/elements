import { forwardRef } from "react"
import { Box } from "@rent_avail/core"
import { useSelectItem } from "../controls-hooks"

export const SelectItem = forwardRef(function SelectItem(props, ref) {
  const { selectItemProps, visible } = useSelectItem({ ...props, ref })
  return (
    visible && (
      <Box
        {...selectItemProps}
        sx={{
          p: "2rem",
          "&:not(:last-of-type)": {
            borderBottom: (theme) => `1px solid ${theme.colors.ui_500}`,
          },
          "&:focus, &[aria-selected='true']": { bg: "ui_300" },
        }}
      />
    )
  )
})
