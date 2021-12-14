import React, { useContext, forwardRef } from "react"
import { Box } from "@rent_avail/layout"
import Input from "@rent_avail/input"
import { wrapEvent, mergeRefs } from "@rent_avail/utils"
import { ChevronDown } from "react-feather"
import clsx from "clsx"
import { SelectContext, types } from "./select-provider"

function useSelectInput({
  className,
  onFocus,
  onChange,
  onKeyDown,
  ref,
  ...props
}) {
  const { state, dispatch, listRef, inputRef } = useContext(SelectContext)
  function handleFocus() {
    dispatch({ type: types.OPEN_LIST })
  }
  function handleChange({ target }) {
    if (state.search) {
      dispatch({ type: types.UPDATE_INPUT, payload: target.value })
    }
  }
  function handleKeyDown({ key }) {
    if (key === "ArrowDown") listRef.current.firstChild.focus()
    if (key === "Tab") dispatch({ type: types.CLOSE_LIST })
  }
  return {
    state,
    inputProps: {
      ...props,
      className: clsx(className, { filled: state.value.length }),
      onFocus: wrapEvent(onFocus, handleFocus),
      onChange: wrapEvent(onChange, handleChange),
      onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
      ref: mergeRefs(ref, inputRef),
    },
    valueBoxProps: {
      "aria-hidden": !state.value.length,
      hidden: !state.value.length,
      children: state.defaultLabel.length ? state.defaultLabel : state.value,
    },
  }
}

function SelectInput({ sx, ...props }, ref) {
  const { inputProps, valueBoxProps, state } = useSelectInput({ ...props, ref })
  return (
    <Box as="section" sx={{ position: "relative", ...sx }}>
      <Input
        {...inputProps}
        sx={{
          "& input": { color: "transparent", textShadow: "0 0 0 #2d2d2d" },
        }}
      />
      <Box
        as={ChevronDown}
        sx={{
          position: "absolute",
          top: "2.5rem",
          right: "2rem",
          transition: "200ms",
          transform: state.isOpen ? "rotate(180deg)" : "rotate(0)",
          pointerEvents: "none",
        }}
      />
      <Box
        {...valueBoxProps}
        sx={{
          position: "absolute",
          top: "3.75rem",
          left: "2rem",
          maxWidth: "calc(100% - 7rem)",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          bg: "blue_100",
          px: "0.5rem",
          borderRadius: 4,
          color: "blue_700",
        }}
      />
    </Box>
  )
}

export default forwardRef(SelectInput)
