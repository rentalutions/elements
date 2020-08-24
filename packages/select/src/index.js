import React, {
  memo,
  forwardRef,
  createContext,
  useRef,
  useReducer,
  useContext,
  useEffect,
  useState,
  useImperativeHandle,
  useMemo,
} from "react"
import styled, { css } from "styled-components"
import Popover, { getPosition } from "@rent_avail/popover"
import { Card } from "@rent_avail/layout"
import { wrapEvent, noop, useWindowResize } from "@rent_avail/utils"
import { ChevronDown } from "react-feather"
import clsx from "clsx"

const SelectContext = createContext()

const types = {
  OPEN_LIST: "@rent_avail/elements/select/open_list",
  CLOSE_LIST: "@rent_avail/elements/select/close_list",
  UPDATE_WIDTH: "@rent_avail/elements/select/update_width",
  UPDATE_INPUT: "@rent_avail/elements/select/update_input",
  SET_VALUE: "@rent_avail/elements/select/set_value",
  SET_ERROR: "@rent_avail/elements/select/set_value",
}

const initialState = {
  value: "",
  typeAheadQuery: "",
  width: 120,
  isOpen: false,
}

function selectReducer(state, action) {
  switch (action.type) {
    case types.OPEN_LIST:
      return { ...state, isOpen: true }
    case types.CLOSE_LIST:
      return { ...state, isOpen: false, typeAheadQuery: "" }
    case types.UPDATE_WIDTH:
      return { ...state, width: action.payload }
    case types.UPDATE_INPUT:
      return { ...state, typeAheadQuery: action.payload, value: "" }
    case types.SET_VALUE:
      return {
        ...state,
        isOpen: false,
        value: action.payload,
        typeAheadQuery: "",
      }
    default:
      throw Error(`Unknown action type ${action.type}.`)
  }
}

function Select({
  children,
  id,
  onSelect = noop,
  disabled = false,
  defaultValue = "",
  parentRef,
}) {
  const inputRef = useRef()
  const listRef = useRef()
  const [{ value, typeAheadQuery, width, isOpen }, dispatch] = useReducer(
    selectReducer,
    {
      ...initialState,
      value: defaultValue,
    }
  )
  const context = useMemo(
    () => ({
      parentRef,
      inputRef,
      listRef,
      state: { value, typeAheadQuery, width, isOpen },
      dispatch,
      onSelect,
      id,
      disabled,
    }),
    [isOpen, id, disabled, width, onSelect, typeAheadQuery]
  )
  return (
    <SelectContext.Provider value={context}>{children}</SelectContext.Provider>
  )
}

const labelTransform = css`
  font-size: 1.334rem;
  transform: translate3d(0, -1rem, 0);
`

const iconTransform = css`
  transform: rotate(180deg);
`

const StyledSelectInput = styled.label`
  position: relative;
  display: block;
  .select__input {
    all: unset;
    box-sizing: border-box;
    padding: 3rem 2rem 1rem 2rem;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ hasError, hasValue, isOpen, theme }) => {
      if (hasError) return theme.colors.red_500
      if (hasValue || isOpen) return theme.colors.blue_500
      return theme.colors.ui_500
    }};
    border-radius: 0.25rem;
    width: 100%;
    transition: 100ms;
    height: 6.5rem;
  }
  .select__value,
  .select__label-row,
  .select__icon {
    position: absolute;
  }
  .select__label-row {
    display: flex;
    align-items: center;
    left: 2rem;
    top: 2.25rem;
    transition: 80ms;
    color: ${({ theme }) => theme.colors.ui_700};
    width: calc(100% - 4rem);
    ${({ hasValue, isOpen }) => (hasValue || isOpen) && labelTransform};
    .select__label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .select__required {
      color: ${({ theme }) => theme.colors.red_500};
      width: 0.5rem;
      height: 0.5rem;
      background: ${({ theme }) => theme.colors.red_500};
      border-radius: 50%;
      margin-left: 1rem;
      flex-shrink: 0;
    }
  }
  .select__icon {
    right: 2rem;
    top: calc(2.25rem);
    transition: 100ms;
    ${({ isOpen }) => isOpen && iconTransform}
  }
  .select__value {
    top: 3rem;
    left: 2.25rem;
  }
  .select__error {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    color: ${({ theme }) => theme.colors.red_500};
    font-size: 1.334rem;
    line-height: 1.5;
  }
`

function Input(
  {
    className,
    onFocus = noop,
    onChange = noop,
    onKeyDown = noop,
    label,
    required,
    search = true,
    error = null,
    style,
    ...props
  },
  ref
) {
  const {
    state: { typeAheadQuery, value, isOpen, id },
    listRef,
    inputRef,
    dispatch,
  } = useContext(SelectContext)
  function handleFocus() {
    dispatch({ type: types.OPEN_LIST })
  }
  function handleChange({ target }) {
    if (search) dispatch({ type: types.UPDATE_INPUT, payload: target.value })
  }
  function handleKeyDown({ key }) {
    if (key === "ArrowDown") listRef.current.firstChild.focus()
    if (key === "Tab") dispatch({ type: types.CLOSE_LIST })
  }
  useImperativeHandle(ref, () => ({ ...inputRef }))
  return (
    <StyledSelectInput
      className={className}
      style={style}
      hasError={Boolean(error)}
      isOpen={isOpen}
      hasValue={typeAheadQuery.length || value.length}
      searchable
    >
      <input
        {...props}
        id={id}
        ref={inputRef}
        aria-expanded={isOpen ? true : undefined}
        aria-haspopup
        aria-controls={id}
        value={typeAheadQuery}
        className="select__input"
        onChange={wrapEvent(onChange, handleChange)}
        onFocus={wrapEvent(onFocus, handleFocus)}
        onKeyDown={wrapEvent(onKeyDown, handleKeyDown)}
      />
      <div className="select__label-row">
        <span className="select__label">{label}</span>
        {required && <span className="select__required" />}
      </div>
      {error && <span className="select__error">{error}</span>}
      {value && <span className="select__value">{value}</span>}
      <ChevronDown className={`select__icon ${isOpen && "icon--is-open"}`} />
    </StyledSelectInput>
  )
}

const StyledList = styled(Card)`
  display: block;
  padding: 0;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.colors.ui_100};
  border: 1px solid ${({ theme }) => theme.colors.ui_500};
  border-radius: 0.25rem;
  list-style: none;
  max-height: calc(100vh - 10rem);
  overflow-y: auto;
`

function List({ children, style, ...props }, ref) {
  const {
    state: { isOpen },
    dispatch,
    parentRef,
    listRef,
    inputRef,
    id,
  } = useContext(SelectContext)
  const inputBounds = useWindowResize(inputRef, parentRef)
  function position({ popover: popoverRect, target: targetRect, parent }) {
    if (!popoverRect || !targetRect)
      return { top: 0, left: 0, visibility: "hidden" }
    const top =
      targetRect.top +
      targetRect.height +
      (!parent ? window.pageYOffset : 0) +
      12
    return {
      top: `${top}px`,
      left: `${targetRect.left + (!parent ? window.pageXOffset : 0)}px`,
      visibility: "visible",
    }
  }
  function handleBlur({ target }) {
    if (!isOpen) return null
    const listEl = listRef.current
    const targetEl = inputRef.current
    if (!listEl?.contains(target) && !targetEl?.contains(target)) {
      dispatch({ type: types.CLOSE_LIST })
    }
  }
  useImperativeHandle(ref, () => ({ ...listRef }))
  useEffect(() => {
    if (isOpen) {
      const { current: input } = inputRef
      const { current: list } = listRef
      const { top } = input.getBoundingClientRect()
      const { height } = list.getBoundingClientRect()
      const fromBottom = window.innerHeight - height
      setTimeout(
        () => window.scrollBy(0, Math.max(top - fromBottom + 120, 0)),
        20
      )
      document.addEventListener("click", handleBlur)
    }
    return () => document.removeEventListener("click", handleBlur)
  }, [isOpen, handleBlur])
  // useEffect(() => {
  //   if (isOpen)
  //     dispatch({ type: types.UPDATE_WIDTH, payload: inputBounds.width })
  // }, [isOpen, inputBounds])
  return isOpen ? (
    <Popover
      id={id}
      targetRef={inputRef}
      position={position}
      style={{ zIndex: "9999" }}
      parentRef={parentRef}
    >
      <StyledList
        {...props}
        as="ul"
        ref={listRef}
        style={{ ...style, width: inputBounds.width }}
      >
        {children}
      </StyledList>
    </Popover>
  ) : null
}

const StyledItem = styled.li`
  padding: 2rem;
  cursor: pointer;
  outline: none;
  &:hover {
    background: ${({ theme }) => theme.colors.ui_300};
  }
  &.selected {
    background: ${({ theme }) => theme.colors.blue_100};
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.ui_500};
  }
  &:focus {
    background: ${({ theme }) => theme.colors.blue_100};
  }
  &:focus {
    background: ${({ theme }) => theme.colors.blue_100};
  }
`

function Item(
  {
    className,
    children,
    value: itemValue = "",
    label = "",
    onClick = noop,
    onKeyDown = noop,
    ...props
  },
  ref
) {
  const {
    state: { value, typeAheadQuery },
    onSelect,
    dispatch,
  } = useContext(SelectContext)
  const [visibility, setVisibility] = useState(true)
  const itemRef = useRef()
  function selectValue({ target }) {
    dispatch({ type: types.SET_VALUE, payload: target.dataset.value })
    onSelect(target.dataset.value)
  }
  function handleKeyDown({ key, target }) {
    const itemEl = itemRef.current
    if (key === "ArrowDown" && itemEl.nextSibling) itemEl.nextSibling.focus()
    if (key === "ArrowUp" && itemEl.previousSibling)
      itemEl.previousSibling.focus()
    if (key === "Enter") selectValue({ target })
    if (key === "Escape") dispatch({ type: types.CLOSE_LIST })
  }
  useImperativeHandle(ref, () => ({ ...itemRef }))
  useEffect(() => {
    function isFiltered() {
      const matcher = new RegExp(typeAheadQuery, "i")
      const search = label || value
      if (!typeAheadQuery.length) return true
      if (search.match(matcher)) return true
      return false
    }
    setVisibility(isFiltered())
  }, [typeAheadQuery])
  return visibility ? (
    <StyledItem
      {...props}
      ref={itemRef}
      className={clsx(className, { selected: value === itemValue })}
      data-value={itemValue}
      tabIndex="0"
      role="menuitem"
      onClick={wrapEvent(onClick, selectValue)}
      onKeyDown={wrapEvent(onKeyDown, handleKeyDown)}
    >
      {children}
    </StyledItem>
  ) : null
}

const SelectInput = memo(forwardRef(Input))
const SelectList = memo(forwardRef(List))
const SelectItem = memo(forwardRef(Item))

export { Select, SelectInput, SelectList, SelectItem }
