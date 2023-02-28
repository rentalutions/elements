import { Box } from "@rent_avail/core"
import { useRovingIndex } from "@rent_avail/hooks"

export function SplitButton() {
  const { containerProps, getTargetProps } = useRovingIndex()
  return (
    <Box as="button">
      Split Button
      <Box as="ul" {...containerProps}>
        <Box as="li" {...getTargetProps(0)}>
          Option One
        </Box>
        <Box as="li" {...getTargetProps(1)}>
          Option two
        </Box>
        <Box as="li" {...getTargetProps(2)}>
          Option three
        </Box>
      </Box>
    </Box>
  )
}
