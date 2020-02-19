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
import { colors, wrapEvent } from "src/constants"

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

function Target({ children, ...rest }, ref) {
  const {
    id,
    targetRef,
    dispatch,
    state: { isOpen }
  } = useContext(MenuContext)
  const child = Children.only(children)
  const { onClick, onBlur } = child.props
  function handleToggleMenu() {
    dispatch({ type: TOGGLE_MENU })
  }
  useImperativeHandle(ref, () => ({ ...targetRef }))
  return cloneElement(child, {
    ...rest,
    id,
    type: "button",
    ref: targetRef,
    "aria-expanded": isOpen,
    "aria-haspopup": "menu",
    onClick: wrapEvent(onClick, handleToggleMenu)
  })
}

const MenuTarget = forwardRef(Target)

const StyledList = styled(Card)`
  list-style: none;
  padding: 0;
  min-width: 20rem;
`

function List({ children, position, ...rest }, ref) {
  const {
    targetRef,
    menuRef,
    popoverRef,
    dispatch,
    state: { isOpen }
  } = useContext(MenuContext)
  useImperativeHandle(ref, () => ({ ...menuRef }))
  function handleBlur({ target }) {
    if (!isOpen) return null
    const menuEl = menuRef.current
    const targetEl = targetRef.current
    if (!menuEl.contains(target) && !targetEl.contains(target)) {
      dispatch({ type: TOGGLE_MENU })
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleBlur)
    return () => document.removeEventListener("click", handleBlur)
  }, [isOpen])
  return isOpen ? (
    <Popover targetRef={targetRef} ref={popoverRef} position={position}>
      <StyledList as="ul" {...rest} ref={menuRef} role="menu">
        {children}
      </StyledList>
    </Popover>
  ) : null
}

const MenuList = forwardRef(List)

const MenuItem = styled.li.attrs({
  role: "menuitem"
})`
  display: block;
  padding: 2rem;
  cursor: pointer;
  outline: none;
  &:hover {
    background: ${colors.ui_300};
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.ui_500};
  }
`

export { Menu, MenuTarget, MenuList, MenuItem }
