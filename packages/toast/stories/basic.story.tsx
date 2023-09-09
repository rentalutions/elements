import { Box } from "@rent_avail/core"
import { SystemStyleObject } from "@styled-system/css"
import { useToast } from "../src"

const buttonStyle: SystemStyleObject = {
  appearance: "none",
  p: "1rem 2rem",
  borderRadius: "0.25rem",
  bg: "ui_300",
  border: "3px solid transparent",
  borderColor: "ui_500",
  color: "ui_700",
  font: "inherit",
  fontWeight: "black",
  cursor: "pointer",
}

export function BasicToast() {
  const toast = useToast()
  return (
    <Box
      as="button"
      onClick={() => toast.blank("I'm a basic toast.")}
      sx={buttonStyle}
    >
      Basic Toast
    </Box>
  )
}
