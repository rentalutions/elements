import Popover from "@rent_avail/popover"
import { useSelectList } from "../controls-hooks"

export function SelectList({ children, ...props }) {
  const { open, targetWidth, listProps } = useSelectList(props)
  return open ? (
    <Popover
      {...listProps}
      sx={{
        minWidth: targetWidth,
        mt: "1rem",
        bg: "ui_100",
        border: (theme) => `1px solid ${theme.colors.ui_500}`,
        maxHeight: "calc(100vh - 10rem)",
        overflowY: "auto",
        borderRadius: 4,
      }}
    >
      {children}
    </Popover>
  ) : null
}
