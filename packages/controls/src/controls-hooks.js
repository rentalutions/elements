import { useState, useRef, useContext, useEffect } from "react"
import { wrapEvent, mergeRefs, useResize, escapeRegExp } from "@rent_avail/utils"
import { SelectContext, SelectActions } from "./select/select-provider"
// import { SelectItemProps } from "./select/select-item"

export function useSelectInput({
  ref,
  onChange,
  onClick,
  onFocus,
  onKeyDown,
  ...props
}) {
  const textFieldRef = useRef(null)
  const { inputRef, listRef, state, dispatch } = useContext(SelectContext)
  function handleChange(event) {
    dispatch({
      type: SelectActions.updateSearchValue,
      payload: event.target.value,
    })
  }
  function handleClick(event) {
    if (event.target === inputRef.current) {
      textFieldRef.current.focus()
    }
  }
  function handleFocus() {
    dispatch({ type: SelectActions.openList })
  }
  function handleKeyDown({ key }) {
    if (key === "ArrowDown")
      listRef.current.querySelector(`[role="option"]`).focus()
    if (key === "Tab") dispatch({ type: SelectActions.closeList })
  }
  return {
    tokens: state.tokens,
    open: state.open,
    wrapperProps: {
      role: "presentation",
      ref: mergeRefs(ref, inputRef),
      onClick: wrapEvent(onClick, handleClick),
    },
    textFieldProps: {
      ...props,
      ref: textFieldRef,
      value: state.searchValue,
      onChange: wrapEvent(onChange, handleChange),
      onFocus: wrapEvent(onFocus, handleFocus),
      onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
      size: state.searchValue.length + 1,
      id: state.id,
      autocomplete: "off",
    },
    labelProps: {
      htmlFor: state.id,
    },
  }
}

export function useSelectList(props) {
  const { inputRef, state, listRef, dispatch } = useContext(SelectContext)
  const inputBounds = useResize(inputRef)
  useEffect(() => {
    function handleDocumentClick({ target }) {
      if (!state.open) return false
      const listEl = listRef.current
      const inputEl = inputRef.current
      if (!listEl?.contains(target) && !inputEl?.contains(target)) {
        dispatch({ type: SelectActions.closeList })
      }
    }
    document.addEventListener("click", handleDocumentClick)
    return () => {
      document.removeEventListener("click", handleDocumentClick)
    }
  }, [state.open])
  return {
    open: state.open,
    targetWidth: inputBounds?.width || 120,
    listProps: {
      ...props,
      role: "listbox",
      "aria-multiselectable": state.multi,
      targetRef: inputRef,
      ref: listRef,
    },
  }
}

export function useSelectItem({
  tokens,
  onClick,
  onKeyDown,
  ref,
  defaultVisible = true,
  ...props
}) {
  const { state, onSelect, dispatch } = useContext(SelectContext)
  const [visible, setVisible] = useState(defaultVisible)
  const itemRef = useRef(null)
  function handleSelect() {
    dispatch({
      type: SelectActions.selectValue,
      payload: tokens,
    })
    onSelect(state.tokens)
  }
  function handleKeyDown({ key }) {
    if (key === "ArrowDown") itemRef.current.nextSibling?.focus()
    if (key === "ArrowUp") itemRef.current.previousSibling?.focus()
    if (key === "Enter") handleSelect()
    if (key === "Escape") dispatch({ type: SelectActions.closeList })
  }
  useEffect(() => {
    setVisible((prevVisible) => {
      if (!state.searchValue.length) return defaultVisible
      const matcher = new RegExp(escapeRegExp(state.searchValue), "i")
      for (let token of tokens) {
        const anyMatch = Object.values(token).some((value) =>
          value.toString().match(matcher)
        )
        if (anyMatch) {
          return true
        }
      }
      return false
    })
  }, [state.searchValue])
  return {
    visible,
    selectItemProps: {
      ...props,
      tabIndex: 0,
      role: "option",
      "aria-selected": state.tokens.some((stateToken) =>
        tokens.some((itemToken) => itemToken.id === stateToken.id)
      ),
      ref: mergeRefs(ref, itemRef),
      onClick: wrapEvent(onClick, handleSelect),
      onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
    },
  }
}
