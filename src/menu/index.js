import React, {
  useEffect,
  useReducer,
  forwardRef,
  useRef,
  createContext,
  useContext,
  useImperativeHandle,
  cloneElement,
  Children
} from "react"
import styled from "styled-components"
import Popover from "src/popover"
import Card from "src/card"
import { colors } from "src/constants"

const MenuContext = createContext()

/**
 * Actions
 */

const TOGGLE_MENU = "@rent_avail/menu/toggle"

/**
 * Initial State
 */

const initialState = {
  isOpen: false
}

/**
 * Reducer
 */

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isOpen: !state.isOpen }

    default:
      throw Error("Need to dispatch a known action for Menu")
  }
}

function Menu({ children, id }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const targetRef = useRef()
  const menuRef = useRef()
  const popoverRef = useRef()
  const context = {
    targetRef,
    menuRef,
    popoverRef,
    state,
    dispatch,
    id
  }
  return <MenuContext.Provider value={context}>{children}</MenuContext.Provider>
}

function Target({ children, style, ...rest }, ref) {
  const {
    id,
    targetRef,
    dispatch,
    state: { isOpen }
  } = useContext(MenuContext)
  const child = Children.only(children)
  useImperativeHandle(ref, () => ({ ...targetRef }))
  function handleMouseDown() {
    dispatch({ type: TOGGLE_MENU })
  }
  return cloneElement(child, {
    ...rest,
    id,
    type: "button",
    ref: targetRef,
    "aria-expanded": isOpen,
    "aria-haspopup": "menu",
    onMouseDown: e => {
      if (child.props.onMouseDown) child.props.onMouseDown(e)
      handleMouseDown(e)
    }
  })
}

const MenuTarget = forwardRef(Target)

const StyledList = styled(Card)`
  list-style: none;
  padding: 0;
  min-width: 20rem;
`

function List({ children, ...rest }, ref) {
  const {
    targetRef,
    menuRef,
    popoverRef,
    dispatch,
    state: { isOpen }
  } = useContext(MenuContext)
  useImperativeHandle(ref, () => ({ ...menuRef }))
  function handleOutsideClick(e) {
    if (
      isOpen &&
      !menuRef.current.contains(e.target) &&
      !targetRef.current.contains(e.target)
    ) {
      dispatch({ type: TOGGLE_MENU })
    }
  }
  useEffect(() => {
    if (isOpen) document.addEventListener("click", handleOutsideClick)
    return () => document.removeEventListener("click", handleOutsideClick)
  }, [isOpen])
  return isOpen ? (
    <Popover targetRef={targetRef} ref={popoverRef}>
      <StyledList as="ul" {...rest} ref={menuRef} role="menu">
        {children}
      </StyledList>
    </Popover>
  ) : null
}

const MenuList = forwardRef(List)

const StyledItem = styled.li`
  padding: 2rem;
  cursor: pointer;
  &:hover {
    background: ${colors.ui_300};
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.ui_500};
  }
`

function Item({ children, ...rest }, ref) {
  return (
    <StyledItem {...rest} role="none" ref={ref}>
      {cloneElement(children, {
        ...rest,
        style: { ...children.style, padding: "2rem" },
        role: "menuitem",
        tabIndex: "-1"
      })}
    </StyledItem>
  )
}

const MenuItem = forwardRef(Item)

export { Menu, MenuTarget, MenuList, MenuItem }
