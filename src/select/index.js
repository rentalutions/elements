import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState
} from "react"
import styled, { css } from "styled-components"
import Popover from "src/popover"
import Card from "src/card"
import { useWindowResize } from "src/hooks"
import { colors, wrapEvent } from "src/constants"
import { ChevronDown } from "react-feather"

const SelectContext = createContext()

const types = {
  OPEN_LIST: "@rent_avail/elements/select/open_list",
  CLOSE_LIST: "@rent_avail/elements/select/close_list",
  UPDATE_WIDTH: "@rent_avail/elements/select/update_width",
  UPDATE_INPUT: "@rent_avail/elements/select/update_input",
  SET_VALUE: "@rent_avail/elements/select/set_value"
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
      return { ...state, isOpen: true, selectValue: "" }
    case types.CLOSE_LIST:
      return { ...state, isOpen: false, inputValue: "" }
    case types.UPDATE_WIDTH:
      return { ...state, width: action.width }
    case types.UPDATE_INPUT:
      return { ...state, inputValue: action.value }
    case types.SET_VALUE:
      return { ...state, isOpen: false, selectValue: action.value }
    default:
      throw Error("Must dispatch a known action.")
  }
}

function Select({ children, id, onSelect }) {
  const inputRef = useRef()
  const listRef = useRef()
  const [state, dispatch] = useReducer(selectReducer, initialState)
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

const inputTransform = css`
  border-color: ${colors.blue_500};
`

const StyledSelectInput = styled.label`
  position: relative;
  display: block;
  .select__input {
    all: unset;
    box-sizing: border-box;
    padding: 3rem 2rem 1rem 2rem;
    border: 2px solid ${colors.ui_500};
    border-radius: 0.25rem;
    width: 100%;
    transition: 100ms;
    ${({ hasValue, isOpen }) => (hasValue || isOpen) && inputTransform}
  }
  .select__value,
  .select__label,
  .select__icon {
    position: absolute;
  }
  .select__label {
    top: 2rem;
    left: 2rem;
    transition: 100ms;
    color: ${colors.ui_700};
    ${({ hasValue, isOpen }) => (hasValue || isOpen) && labelTransform}
  }
  .select__icon {
    right: 2rem;
    top: calc(2rem);
    transition: 100ms;
    ${({ isOpen }) => isOpen && iconTransform}
  }
  .select__value {
    top: 3rem;
    left: 2rem;
  }
`

function Input(
  { className, onFocus = () => {}, onChange = () => {}, onSelect, label, ...props },
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
    dispatch({ type: types.UPDATE_INPUT, value: target.value })
  }
  useImperativeHandle(ref, () => ({ ...inputRef }))
  return (
    <StyledSelectInput
      {...props}
      ref={inputRef}
      isOpen={isOpen}
      hasValue={inputValue.length || selectValue.length}
    >
      <input
        ref={ref}
        className="select__input"
        value={inputValue}
        onChange={wrapEvent(handleChange, onChange)}
        onFocus={wrapEvent(handleFocus, onFocus)}
      />
      <span className="select__label">{label}</span>
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

function List({ children, ...props }, ref) {
  const {
    state: { isOpen, width },
    dispatch,
    listRef,
    inputRef,
    id
  } = useContext(SelectContext)
  const inputBounds = useWindowResize(inputRef)
  function position(popoverRect, targetRect) {
    if (!popoverRect || !targetRect) return {}
    return {
      top: `${targetRect.top + targetRect.height + window.pageYOffset + 12}px`,
      left: `${targetRect.left + window.pageXOffset}px`
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
    if (isOpen) document.addEventListener("click", handleBlur)
    return () => document.removeEventListener("click", handleBlur)
  }, [isOpen])
  useEffect(() => {
    if (isOpen) dispatch({ type: types.UPDATE_WIDTH, width: inputBounds.width })
  }, [inputBounds, isOpen])
  return isOpen ? (
    <Popover getPosition={position} id={id} targetRef={inputRef}>
      <StyledList {...props} as="ul" ref={listRef} style={{ width }}>
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

// Use Keydown

function Item(
  { className, children, value = "", searchValue = "", onClick = () => {}, ...props },
  ref
) {
  const {
    state: { currentValue, inputValue },
    onSelect,
    dispatch
  } = useContext(SelectContext)
  const [visibility, setVisibility] = useState(true)
  function handleClick({ target }) {
    dispatch({ type: types.SET_VALUE, value: target.dataset.value })
    if (onSelect) onSelect(target.dataset.value)
  }
  const classes = currentValue === value ? `selected ${className}` : className
  useEffect(() => {
    function isFiltered() {
      const matcher = new RegExp(inputValue)
      const search = searchValue || value
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
      onClick={wrapEvent(handleClick, onClick)}
      className={classes}
    >
      {children}
    </StyledItem>
  ) : null
}

const SelectInput = forwardRef(Input)
const SelectList = forwardRef(List)
const SelectItem = forwardRef(Item)

export { Select as default, SelectInput, SelectList, SelectItem }
