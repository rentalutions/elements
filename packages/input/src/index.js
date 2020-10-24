import React, { forwardRef, useState } from "react"
import { wrapEvent, noop } from "@rent_avail/utils"
import { Box } from "@rent_avail/layout"
import clsx from "clsx"

function Input(
  {
    as = "input",
    className,
    defaultValue,
    disabled,
    error,
    id,
    icon,
    label,
    labelId,
    required,
    onChange = noop,
    sx = {},
    type = "text",
    value,
    ...props
  },
  ref
) {
  const isDate = type === "date"
  const isTextarea = as === "textarea"
  const ariaId = labelId || label.replace(/ /g, "_").toLowerCase()
  const [filled, setFilled] = useState(
    isDate || Boolean(value) || Boolean(defaultValue)
  )
  function handleChange({ target: { value: innerValue } }) {
    setFilled(innerValue.length || isDate)
  }
  return (
    <Box
      as="label"
      className={clsx(className, { filled, error })}
      sx={{
        position: "relative",
        display: "block",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "ui_500",
        borderRadius: 4,
        color: disabled ? "ui_700" : "ui_900",
        cursor: disabled ? "not-allowed" : "text",
        lineHeight: "small",
        width: "100%",
        "&:focus-within": {
          borderColor: "blue_500",
          color: "blue_500",
        },
        "&:focus-within .input__label-row, &.filled .input__label-row": {
          transform: "translateY(-1rem) scale(0.889)",
        },
        "&.filled:not(:focus-within):not(.error) .input__label-row": {
          color: disabled ? "ui_500" : "ui_700",
        },
        "&.error": {
          borderColor: "red_500",
        },
        "&.error .input__label-row": {
          color: "red_500",
        },
        "& > *": {
          transition: "120ms",
        },
        ...sx,
      }}
    >
      <Box
        {...props}
        ref={ref}
        as={as}
        type={type}
        aria-labelledby={ariaId}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={wrapEvent(onChange, handleChange)}
        sx={{
          all: "unset",
          appearance: "none",
          boxSizing: "border-box",
          position: "relative",
          p: icon ? "3rem 2rem 1rem 5rem" : "3rem 2rem 1rem",
          fontFamily: "body",
          height: isTextarea ? "auto" : "6.5rem",
          width: "100%",
          clipPath: isTextarea ? "inset(3rem 0 0 0)" : "none",
        }}
      />
      <Box
        className="input__label-row"
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          top: "2.25rem",
          left: icon ? "5rem" : "2rem",
          transformOrigin: "top left",
          pointerEvents: "none",
          color: disabled ? "ui_500" : "inherit",
        }}
      >
        <Box as="span" id={ariaId}>
          {label}
        </Box>
        {required && (
          <Box
            as="span"
            sx={{
              width: 6,
              height: 6,
              bg: "red_500",
              borderRadius: "50%",
            }}
          />
        )}
      </Box>
      {error && (
        <Box
          as="span"
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            fontSize: "small",
            color: "red_500",
            width: "100%",
          }}
        >
          {error}
        </Box>
      )}
      {icon && (
        <Box
          as={icon}
          aria-label="input icon"
          sx={{ position: "absolute", left: "2rem", top: "2.25rem" }}
        />
      )}
    </Box>
  )
}

export default forwardRef(Input)
