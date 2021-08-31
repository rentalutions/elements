import { forwardRef, useContext } from "react"
import { Box } from "@rent_avail/core"
import { X } from "@rent_avail/icons"
import clsx from "clsx"
import { useSelectInput } from "../controls-hooks"
import { SelectContext, SelectActions } from "./select-provider"

export const SelectInput = forwardRef(function SelectInput(
  { sx, token: Token = DefaultToken, label, className, ...props },
  ref
) {
  const {
    open,
    tokens,
    wrapperProps,
    textFieldProps,
    labelProps,
  } = useSelectInput({ ...props, ref })
  return (
    <Box
      {...wrapperProps}
      className={clsx(className, { raised: open || tokens.length })}
      sx={{
        p: "3rem 2rem 1rem",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        position: "relative",
        border: (theme) => `2px solid ${theme.colors.ui_500}`,
        borderColor: open ? "blue_500" : tokens.length ? "ui_700" : "ui_500",
        borderRadius: 4,
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        "&:is(:focus-within, .raised) .label": {
          transform: "scale(0.75) translateY(-50%)",
          color: "ui_900",
        },
        ...sx,
      }}
    >
      {tokens.map(({ id, ...props }) => (
        <Token key={id} id={id} {...props} />
      ))}
      <Box
        as="input"
        {...textFieldProps}
        sx={{
          outline: "none",
          appearance: "none",
          bg: "transparent",
          border: "none",
          text: "body",
          fontFamily: "body",
          width: tokens.length ? "auto" : "100%",
        }}
      />
      <Box
        {...labelProps}
        className="label"
        as="label"
        sx={{
          position: "absolute",
          text: "body",
          top: "2rem",
          transition: "120ms",
          transformOrigin: "left top",
        }}
      >
        {label}
      </Box>
    </Box>
  )
})

function DefaultToken({ name, value }) {
  const { dispatch } = useContext(SelectContext)
  function removeToken() {
    dispatch({
      type: SelectActions.removeToken,
      payload: (token) => value !== token.value,
    })
  }
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        px: "0.5rem",
        bg: "blue_100",
        borderRadius: 4,
        color: "blue_700",
        height: "2rem",
        gap: "0.5rem",
        text: "small",
      }}
    >
      <Box as="span">{name}</Box>
      <Box
        as={X}
        sx={{
          color: "blue_300",
          width: "1.5rem",
          height: "1.5rem",
          cursor: "pointer",
        }}
        onClick={removeToken}
      />
    </Box>
  )
}
