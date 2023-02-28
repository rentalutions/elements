import {
  ChangeEvent,
  useState,
  useRef,
  useContext,
  useEffect,
  HTMLProps,
  ForwardedRef,
  KeyboardEvent,
} from "react"
import { noop, wrapEvent, mergeRefs, getId } from "@rent_avail/utils"
import { SelectContext, SelectActions } from "./select/select-provider"
import { useResize, useId } from "@rent_avail/hooks"

export function useTextControl({
  type = "text",
  label,
  onChange = noop,
  error = null,
  value,
  help,
  defaultValue,
  id,
  ...props
}: any) {
  const labelId = useId()
  const isDate = type === "date"
  const [raised, setRaised] = useState(!!value || !!defaultValue || isDate)
  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setRaised(!!target.value.length || isDate)
  }
  return {
    raised,
    label,
    error,
    help,
    labelProps: {
      id: labelId,
    },
    textFieldProps: {
      ...props,
      id,
      type,
      value,
      "aria-labelledby": labelId,
      onChange: wrapEvent(onChange, handleChange),
    },
    errorProps: {
      hidden: !error,
      role: "alert",
    },
    helpProps: {
      hidden: error || !help,
    },
  }
}

interface DiscreteControlProps extends HTMLProps<HTMLInputElement> {
  label?: string
  error?: string
  ref: ForwardedRef<HTMLInputElement>
}

export function useDiscreteControl({
  checked: externalChecked,
  defaultChecked = false,
  error,
  label,
  onChange,
  onKeyDown,
  ref,
  type = "checkbox",
  ...props
}: DiscreteControlProps) {
  const labelId = useId()
  const [checked, set] = useState<boolean>(defaultChecked)
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    set(event.target.checked)
  }
  function handleKeyDown({ key }: KeyboardEvent) {
    if (key === "Enter" || key === " ") set((prevChecked) => !prevChecked)
  }
  useEffect(() => {
    if (externalChecked != null) set(externalChecked)
  }, [externalChecked])
  return {
    label,
    error,
    checked,
    wrapperProps: {
      tabIndex: 0,
      onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
    },
    inputProps: {
      ...props,
      type,
      checked,
      onChange: wrapEvent(onChange, handleChange),
      hidden: true,
      "aria-labelledby": labelId,
    },
    labelProps: { id: labelId },
    errorProps: { role: "alert" },
  }
}

// export function useCheckbox({
//   type = "checkbox",
//   label,
//   ref,
//   error,
//   defaultChecked = false,
//   checked: externalChecked,
//   onChange,
//   ...props
// }: any) {
//   const [checked, setChecked] = useState(defaultChecked)
//   function handleChange(evt: ChangeEvent<HTMLInputElement>) {
//     setChecked(evt.target.checked)
//   }
//   function handleKeyDown({ key }) {
//     console.log(key)
//     if (key === "Enter" || key === " ") setChecked((prev) => !prev)
//   }
//   return {
//     checked,
//     label,
//     wrapperProps: { tabIndex: 0, onKeyDown: handleKeyDown },
//     inputProps: {
//       ...props,
//       key: `${checked}-${props.id}`,
//       ref,
//       type,
//       hidden: true,
//       checked,
//       onChange: wrapEvent(onChange, handleChange),
//     },
//     error,
//     errorHtmlProps: { role: "alert" },
//   }
// }

// export function useSwitch({
//   checked: externalChecked,
//   defaultChecked = false,
//   ref,
//   onChange,
//   onKeyDown,
//   id,
//   ...props
// }: any) {
//   const [checked, set] = useState(defaultChecked)
//   function handleChange(evt) {
//     set((prevChanged) => !prevChanged)
//   }
//   function handleKeyDown({ keyCode }) {
//     if (keyCode === 32) set((prevChanged) => !prevChanged)
//   }
//   useEffect(() => {
//     if (externalChecked != null) set(externalChecked)
//   }, [externalChecked])
//   return {
//     checked,
//     wrapperProps: {
//       role: "switch",
//       tabIndex: 0,
//       id,
//       onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
//     },
//     inputProps: {
//       ...props,
//       ref,
//       type: "checkbox",
//       hidden: true,
//       checked,
//       onChange: wrapEvent(onChange, handleChange),
//     },
//   }
// }

export function useSlider({
  value,
  defaultValue,
  min = 0,
  max = 100,
  onChange,
  ...props
}: any) {
  const initalPosition = parseInt(value ?? defaultValue ?? 0) / parseInt(max)
  const [trackPosition, setTrackPosition] = useState<number>(initalPosition)
  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(evt.target.value) / parseInt(max)
    setTrackPosition(value)
  }
  return {
    inputProps: {
      ...props,
      value,
      defaultValue,
      min,
      max,
      onChange: wrapEvent(onChange, handleChange),
    },
    trackPosition,
  }
}

export function useSelectInput({
  ref,
  onChange,
  onClick,
  onFocus,
  onKeyDown,
  ...props
}: any) {
  const textFieldRef = useRef(null)
  const { inputRef, listRef, state, dispatch } = useContext(SelectContext)
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: SelectActions.updateSearchValue,
      payload: event.target.value,
    })
  }
  function handleClick(event: MouseEvent) {
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
      role: "combobox",
      "aria-expanded": state.open,
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
}: any) {
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
  function handleKeyDown({ key, target }: KeyboardEvent) {
    if (key === "ArrowDown") itemRef.current.nextSibling?.focus()
    if (key === "ArrowUp") itemRef.current.previousSibling?.focus()
    if (key === "Enter") handleSelect()
    if (key === "Escape") dispatch({ type: SelectActions.closeList })
  }
  useEffect(() => {
    setVisible((prevVisible) => {
      if (!state.searchValue.length) return defaultVisible
      const matcher = new RegExp(state.searchValue, "i")
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
