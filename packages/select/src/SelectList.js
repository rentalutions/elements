import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useEffect,
} from "react"
import Popover from "@rent_avail/popover"
import { Box } from "@rent_avail/layout"
import { SelectContext, types } from "./SelectProvider"

function SelectList({ as = "ul", sx = {}, style = {}, ...props }, ref) {
  const { state, dispatch, listRef, inputRef } = useContext(SelectContext)
  useImperativeHandle(ref, () => ({ ...listRef?.current }))
  useEffect(() => {
    let cancelled = false
    function handleDocumentClick({ target }) {
      if (!state.isOpen) return false
      const listEl = listRef.current
      const inputEl = inputRef.current
      if (!listEl?.contains(target) && !inputEl?.contains(target)) {
        dispatch({ type: types.CLOSE_LIST })
      }
    }
    function scrollWindow(top, fromBottom) {
      if (!cancelled) window.scrollBy(0, Math.max(top - fromBottom + 120, 0))
    }
    document.addEventListener("click", handleDocumentClick)
    if (state.isOpen) {
      const { current: input } = inputRef
      const { current: list } = listRef
      const { top } = input.getBoundingClientRect()
      const { height } = list.getBoundingClientRect()
      const fromBottom = window.innerHeight - height
      setTimeout(() => scrollWindow(top, fromBottom), 20)
    }
    return () => {
      cancelled = true
      document.removeEventListener("click", handleDocumentClick)
    }
  }, [state.isOpen])
  return state.isOpen ? (
    <Popover
      id={state.id}
      targetRef={inputRef}
      position={{ x: "left", y: "bottom" }}
      style={{ zIndex: "9999" }}
    >
      <Box
        {...props}
        ref={listRef}
        as={as}
        sx={{
          display: "block",
          p: 0,
          mb: "2rem",
          bg: "ui_100",
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "ui_500",
          maxHeight: "calc(100vh - 10rem)",
          overflowY: "auto",
          ...sx,
        }}
        style={{ ...style, width: inputRef.current.offsetWidth || "auto" }}
      />
    </Popover>
  ) : null
}

export default forwardRef(SelectList)
