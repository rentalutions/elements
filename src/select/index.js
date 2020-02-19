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
import { useRect, useResize } from "src/hooks"
import { colors } from "src/constants"
import { ChevronDown } from "react-feather"

const SelectContext = createContext()

const types = {
  OPEN_LIST: "@rent_avail/elements/select/open",
  CLOSE_LIST: "@rent_avail/elements/select/close",
  UPDATE_WIDTH: "@rent_avail/elements/select/update_width"
}

function selectReducer(state, action) {
  switch (action.type) {
    case types.OPEN_LIST:
      return { ...state, isOpen: true }
    case types.CLOSE_LIST:
      return { ...state, isOpen: false }
    case types.UPDATE_WIDTH:
      return { ...state, listWidth: action.width }
    default:
      throw Error("Must dispatch a known action.")
  }
}

function Select({ children, id }) {
  const inputRef = useRef()
  const listRef = useRef()
  const [state, dispatch] = useReducer(selectReducer, { isOpen: false, listWidth: 0 })
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
  const { inputRef, dispatch } = useContext(SelectContext)
  function handleFocus() {
    dispatch({ type: types.OPEN_LIST })
  }
  useImperativeHandle(ref, () => ({ ...inputRef }))
  return (
    <StyledTextField {...props} ref={inputRef} icon={ChevronDown} onFocus={handleFocus} />
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
    state: { isOpen },
    dispatch,
    listRef,
    inputRef,
    id
  } = useContext(SelectContext)
  const inputBounds = useRect(inputRef)
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
    if (isOpen && !listEl.contains(target) && !targetEl.contains(target)) {
      dispatch({ type: types.CLOSE_LIST })
    }
  }
  useImperativeHandle(ref, () => ({ ...listRef }))
  useEffect(() => {
    document.addEventListener("click", handleBlur)
    return () => document.removeEventListener("click", handleBlur)
  }, [isOpen])
  return isOpen ? (
    <Popover getPosition={position} id={id} targetRef={inputRef}>
      <StyledList {...props} as="ul" ref={listRef} style={{ width: inputBounds.width }}>
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

function Item({ children, value = "", ...props }, ref) {
  return (
    <StyledItem {...props} ref={ref} value={value}>
      {children}
    </StyledItem>
  )
}

const SelectInput = forwardRef(Input)
const SelectList = forwardRef(List)
const SelectItem = forwardRef(Item)

export { Select as default, SelectInput, SelectList, SelectItem }

// 1. When the list opens. Check the width of the input. Set the width of the list to the width of the input.
// 2. When the width of the input changes. Change the width of the list.
