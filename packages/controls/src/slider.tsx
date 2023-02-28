import { forwardRef, HTMLProps } from "react"
import { Box, SXObject } from "@rent_avail/core"
import { useSlider } from "./controls-hooks"

interface SliderProps extends HTMLProps<HTMLInputElement> {
  sx?: SXObject
  min: number | string
  max: number | string
}

/**
 * Range Slider
 *
 * Should provide a way for a user to scrub through range of values (usually numbers).
 * Sliders are useful when changing a value will have an immediate effect on other inputs
 * or outputs, like a interest rate calculator or a tempature gauge. To see useful slider
 * patterns and examples, go to https://design.avail.co/elements/slider
 */

export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
  { sx, ...props },
  ref
) {
  const { inputProps, trackPosition } = useSlider({ ...props, ref })
  return (
    <Box
      {...inputProps}
      as="input"
      type="range"
      sx={{
        appearance: "none",
        position: "relative",
        height: "0.5rem",
        bg: "blue_100",
        width: "100%",
        borderRadius: "0.25rem",
        "&::-webkit-slider-thumb": {
          appearance: "none",
          width: "2rem",
          height: "2rem",
          bg: "blue_500",
          cursor: "pointer",
          borderRadius: "50%",
          transition: "transform 200ms",
          "&:hover": {
            transform: "scale(1.1)",
          },
        },
        "&:after": {
          content: "''",
          width: `max(2rem, ${trackPosition * 100}%)`,
          bg: "blue_500",
          position: "absolute",
          left: 0,
          height: "100%",
          borderRadius: "0.25rem",
        },
        ...sx,
      }}
    />
  )
})
