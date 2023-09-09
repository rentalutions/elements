import { forwardRef } from "react"
import { Box } from "@rent_avail/core"

export const Switch = forwardRef(function Switch(
  { className, children, block, sx = {}, ...props },
  ref
) {
  return (
    <Box
      as="label"
      sx={{
        position: "relative",
        display: block ? "flex" : "inline-flex",
        flexDirection: block ? "row-reverse" : "row",
        ...sx,
      }}
    >
      <Box
        as="input"
        type="checkbox"
        ref={ref}
        sx={{
          display: "none",
          "&:checked + .slider": {
            bg: "brand.primary",
            "&::before": {
              borderColor: "brand.primary",
              translate: "2rem",
            },
          },
        }}
        {...props}
      />
      <Box
        className="slider"
        sx={{
          position: "relative",
          height: "2rem",
          width: "4rem",
          bg: "background.secondary",
          borderRadius: "1rem",
          transition: "200ms",
          flexShrink: 0,
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            height: "2rem",
            width: "2rem",
            bg: "background.primary",
            border: "0.25rem solid transparent",
            borderColor: "border.secondary",
            transition: "200ms",
            boxSizing: "border-box",
          },
        }}
      />
      {children && (
        <Box as="p" sx={{ ml: block ? 0 : 1 }}>
          {children}
        </Box>
      )}
    </Box>
  )
})
