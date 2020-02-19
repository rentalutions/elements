import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  createContext,
  useReducer,
  useContext,
  useEffect
} from "react"
import styled from "styled-components"
import TextField from "src/text-input"
import Popover from "src/popover"
import Card from "src/card"
import { useWindowResize } from "src/hooks"
import { colors, wrapEvent } from "src/constants"
import { ChevronDown } from "react-feather"

const SelectContext = createContext()

const types = {
  OPEN_LIST: "@rent_avail/elements/select/open",
  CLOSE_LIST: "@rent_avail/elements/select/close",
  UPDATE_WIDTH: "@rent_avail/elements/select/width",
  UPDATE_VALUE: "@rent_avail/elements/select/value"
}

function selectReducer(state, action) {
  switch (action.type) {
    case types.OPEN_LIST:
      return { ...state, isOpen: true }
    case types.CLOSE_LIST:
      return { ...state, isOpen: false }
    case types.UPDATE_WIDTH:
      return { ...state, width: action.width }
    case types.SET_VALUE:
      console.log(action.value)
      return { ...state, currentValue: action.value, isOpen: false }
    default:
      throw Error("Must dispatch a known action.")
  }
}

function Select({ children, id }) {
  const inputRef = useRef()
  const listRef = useRef()
  const [state, dispatch] = useReducer(selectReducer, { isOpen: false, width: 0 })
  const context = {
    inputRef,
    listRef,
    state,
    dispatch,
    id
  }
  return <SelectContext.Provider value={context}>{children}</SelectContext.Provider>
}

const StyledTextField = styled(TextField)`
  input {
    padding-left: 2rem;
    padding-right: 5rem;
  }
  .label {
    left: 2rem;
    right: calc(5rem - 2px);
  }
  .input__icon {
    left: auto;
    right: calc(2rem - 2px);
  }
`

function Input(props, ref) {
  const {
    state: { currentValue },
    inputRef,
    dispatch
  } = useContext(SelectContext)
  function handleFocus() {
    dispatch({ type: types.OPEN_LIST })
  }
  useImperativeHandle(ref, () => ({ ...inputRef }))
  return (
    <StyledTextField
      {...props}
      value={currentValue}
      ref={inputRef}
      icon={ChevronDown}
      onFocus={handleFocus}
    />
  )
}

const StyledList = styled(Card)`
  display: block;
  padding: 0;
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
    if (isOpen && !listEl?.contains(target) && !targetEl?.contains(target)) {
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
  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.ui_500};
  }
`

function Item({ children, value = "", onClick = () => null, ...props }, ref) {
  const {
    state: { currentValue },
    dispatch
  } = useContext(SelectContext)
  function handleClick(event) {
    dispatch({ type: types.SET_VALUE, value: event.target.dataset.value })
  }
  return (
    <StyledItem
      {...props}
      ref={ref}
      data-value={value}
      onClick={wrapEvent(handleClick, onClick)}
    >
      {children}
    </StyledItem>
  )
}

const SelectInput = forwardRef(Input)
const SelectList = forwardRef(List)
const SelectItem = forwardRef(Item)

export { Select as default, SelectInput, SelectList, SelectItem }
