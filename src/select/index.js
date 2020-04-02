import React, {
  memo,
  forwardRef,
  createContext,
  useRef,
  useReducer,
  useContext,
  useEffect,
  useState,
  useImperativeHandle
} from "react"
import styled, { css } from "styled-components"
import Popover from "src/popover"
import Card from "src/card"
import { useWindowResize } from "src/hooks"
import { colors, wrapEvent, noop } from "src/constants"
import { ChevronDown } from "react-feather"
import clsx from "clsx"

const SelectContext = createContext()

const types = {
  OPEN_LIST: "@rent_avail/elements/select/open_list",
  CLOSE_LIST: "@rent_avail/elements/select/close_list",
  UPDATE_WIDTH: "@rent_avail/elements/select/update_width",
  UPDATE_INPUT: "@rent_avail/elements/select/update_input",
  SET_VALUE: "@rent_avail/elements/select/set_value",
  SET_ERROR: "@rent_avail/elements/select/set_value"
}

const initialState = {
  selectValue: "",
  inputValue: "",
  width: 120,
  isOpen: false
}

function selectReducer(state, action) {
  switch (action.type) {
    case types.OPEN_LIST:
      return { ...state, isOpen: true }
    case types.CLOSE_LIST:
      return { ...state, isOpen: false, inputValue: "" }
    case types.UPDATE_WIDTH:
      return { ...state, width: action.payload }
    case types.UPDATE_INPUT:
      return { ...state, inputValue: action.payload, selectValue: "" }
    case types.SET_VALUE:
      return { ...state, isOpen: false, selectValue: action.payload }
    default:
      throw Error(`Unknown action type ${action.type}.`)
  }
}

function Select({ children, id, onSelect, defaultValue = "" }) {
  const inputRef = useRef()
  const listRef = useRef()
  const [state, dispatch] = useReducer(selectReducer, {
    ...initialState,
    selectValue: defaultValue
  })
  const context = {
    inputRef,
    listRef,
    state,
    dispatch,
    onSelect,
    id
  }
  return <SelectContext.Provider value={context}>{children}</SelectContext.Provider>
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
    border-color: ${({ hasError, hasValue, isOpen }) => {
      if (hasError) return colors.red_500
      if (hasValue || isOpen) return colors.blue_500
      return colors.ui_500
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
    color: ${colors.ui_700};
    width: calc(100% - 4rem);
    ${({ hasValue, isOpen }) => (hasValue || isOpen) && labelTransform};
    .select__label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .select__required {
      color: ${colors.red_500};
      width: 0.5rem;
      height: 0.5rem;
      background: ${colors.red_500};
      border-radius: 50%;
      margin-left: 1rem;
      flex-shrink: 0;
    }
  }
  .select__icon {
    right: 2rem;
    top: calc(2rem);
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
    bottom: -2rem;
    right: 0;
    color: ${colors.red_500};
    line-height: 1.5;
    font-size: 1.334rem;
  }
`

function Input(
  {
    className,
    onFocus = noop,
    onChange = noop,
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
    state: { inputValue, selectValue, isOpen },
    inputRef,
    dispatch
  } = useContext(SelectContext)
  function handleFocus() {
    dispatch({ type: types.OPEN_LIST })
  }
  function handleChange({ target }) {
    if (search) dispatch({ type: types.UPDATE_INPUT, payload: target.value })
  }
  useImperativeHandle(ref, () => ({ ...inputRef }))
  return (
    <StyledSelectInput
      {...props}
      className={className}
      style={style}
      hasError={Boolean(error)}
      isOpen={isOpen}
      hasValue={inputValue.length || selectValue.length}
      searchable
    >
      <input
        {...props}
        ref={inputRef}
        className="select__input"
        value={inputValue}
        onChange={wrapEvent(onChange, handleChange)}
        onFocus={wrapEvent(onFocus, handleFocus)}
      />
      <div className="select__label-row">
        <span className="select__label">{label}</span>
        {required && <span className="select__required" />}
      </div>
      {error && <span className="select__error">{error}</span>}
      {selectValue && <span className="select__value">{selectValue}</span>}
      <ChevronDown className={`select__icon ${isOpen && "icon--is-open"}`} />
    </StyledSelectInput>
  )
}

const StyledList = styled(Card)`
  display: block;
  padding: 0;
  margin-bottom: 2rem;
  background: ${colors.ui_100};
  border: 1px solid ${colors.ui_500};
  border-radius: 0.25rem;
  list-style: none;
  max-height: calc(100vh - 10rem);
  overflow-y: auto;
`

function List({ children, style, ...props }, ref) {
  const {
    state: { isOpen, width },
    dispatch,
    listRef,
    inputRef,
    id
  } = useContext(SelectContext)
  const inputBounds = useWindowResize(inputRef)
  function position({ popover: popoverRect, target: targetRect }) {
    if (!popoverRect || !targetRect) return { top: 0, left: 0, visibility: "hidden" }
    return {
      top: `${targetRect.top + targetRect.height + window.pageYOffset + 12}px`,
      left: `${targetRect.left + window.pageXOffset}px`,
      visibility: "visible"
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
      const { height } = listRef.current.getBoundingClientRect()
      // Note, scrollBy behavior needs to be smooth to prevent the list appearing in the wrong spot.
      // This is not supported by IE or Edge, so they're just going to have to scroll themselves.
      window.scrollBy({
        top: height,
        behavior: "smooth"
      })
      document.addEventListener("click", handleBlur)
    }
    return () => document.removeEventListener("click", handleBlur)
  }, [isOpen, handleBlur])
  useEffect(() => {
    if (isOpen) dispatch({ type: types.UPDATE_WIDTH, payload: inputBounds.width })
  }, [inputBounds, isOpen])
  return isOpen ? (
    <Popover id={id} targetRef={inputRef} position={position} style={{ zIndex: "9999" }}>
      <StyledList {...props} as="ul" ref={listRef} style={{ ...style, width }}>
        {children}
      </StyledList>
    </Popover>
  ) : null
}

const StyledItem = styled.li`
  padding: 2rem;
  cursor: pointer;
  &:hover {
    background: ${colors.ui_300};
  }
  &.selected {
    background: ${colors.blue_100};
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.ui_500};
  }
`

function Item(
  { className, children, value = "", label = "", onClick = noop, ...props },
  ref
) {
  const {
    state: { currentValue, inputValue },
    onSelect,
    dispatch
  } = useContext(SelectContext)
  const [visibility, setVisibility] = useState(true)
  function handleClick({ target }) {
    dispatch({ type: types.SET_VALUE, payload: target.dataset.value })
    if (onSelect) onSelect(target.dataset.value)
  }
  const classes = currentValue === value ? `selected ${className}` : className
  useEffect(() => {
    function isFiltered() {
      const matcher = new RegExp(inputValue, "i")
      const search = label || value
      if (!inputValue.length) return true
      if (search.match(matcher)) return true
      return false
    }
    setVisibility(isFiltered())
  }, [inputValue])
  return visibility ? (
    <StyledItem
      {...props}
      ref={ref}
      data-value={value}
      onClick={wrapEvent(onClick, handleClick)}
      className={classes}
    >
      {children}
    </StyledItem>
  ) : null
}

const SelectInput = memo(forwardRef(Input))
const SelectList = memo(forwardRef(List))
const SelectItem = memo(forwardRef(Item))

export { Select as default, SelectInput, SelectList, SelectItem }
