import React, {
  memo,
  useEffect,
  useReducer,
  forwardRef,
  useRef,
  createContext,
  useContext,
  useImperativeHandle,
  cloneElement,
} from "react"
import styled from "styled-components"
import Popover from "@rent_avail/popover"
import { Card } from "@rent_avail/layout"
import { mergeRefs, wrapEvent } from "@rent_avail/utils"

const MenuContext = createContext()

const types = {
  OPEN_MENU: "menu/open",
  CLOSE_MENU: "menu/close",
}

const initialState = {
  isOpen: false,
}

function reducer(state, action) {
  switch (action.type) {
    case types.OPEN_MENU: {
      return { ...state, isOpen: true }
    }
    case types.CLOSE_MENU: {
      return { ...state, isOpen: false }
    }
    default:
      throw Error("Need to dispatch a known action for Menu")
  }
}

function Menu({ parentRef, children, id }) {
  const [{ isOpen }, dispatch] = useReducer(reducer, initialState)
  const targetRef = useRef()
  const menuRef = useRef()
  const popoverRef = useRef()
  const openMenu = () => dispatch({ type: types.OPEN_MENU })
  const closeMenu = () => dispatch({ type: types.CLOSE_MENU })
  return (
    <MenuContext.Provider
      value={{
        isOpen,
        openMenu,
        closeMenu,
        targetRef,
        menuRef,
        popoverRef,
        parentRef,
        id,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

function Target({ children, ...rest }, ref) {
  const { id, targetRef, menuRef, openMenu, closeMenu, isOpen } =
    useContext(MenuContext)
  const { onClick, onFocus, onKeyDown } = children.props
  function handleKeyDown({ key }) {
    switch (key) {
      case "Enter": {
        return openMenu()
      }
      case "ArrowDown": {
        menuRef.current?.firstChild?.focus()
        break
      }
      default:
        return false
    }
  }
  const passedProps = {
    id,
    type: "button",
    ref: mergeRefs(ref, targetRef),
    onClick: wrapEvent(onClick, openMenu),
    onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
    "aria-expanded": isOpen,
    "aria-haspopup": "menu",
  }
  return cloneElement(children, {
    ...rest,
    ...passedProps,
  })
}

const MenuTarget = memo(forwardRef(Target))

const StyledList = styled(Card)`
  list-style: none;
  padding: 0;
  min-width: 20rem;
`

function List({ children, position, sx = {}, ...rest }, ref) {
  const { targetRef, menuRef, popoverRef, parentRef, closeMenu, isOpen } =
    useContext(MenuContext)
  function handleBlur({ target }) {
    if (!isOpen) return null
    const menuEl = menuRef.current
    const targetEl = targetRef.current
    if (!menuEl?.contains(target) && !targetEl?.contains(target)) {
      closeMenu()
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleBlur)
    return () => document.removeEventListener("click", handleBlur)
  }, [isOpen])
  return isOpen ? (
    <Popover
      targetRef={targetRef}
      parentRef={parentRef}
      ref={popoverRef}
      position={position}
      sx={{ zIndex: 999, ...sx }}
    >
      <StyledList as="ul" {...rest} ref={mergeRefs(ref, menuRef)} role="menu">
        {children}
      </StyledList>
    </Popover>
  ) : null
}

const MenuList = memo(forwardRef(List))

const ItemWrapper = styled.li`
  display: block;
  padding: 2rem;
  cursor: pointer;
  outline: none;
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.ui_300};
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.ui_500};
  }
`

function Item({ onClick, closeOnClick, ...props }, ref) {
  const itemRef = useRef()

  const { closeMenu } = useContext(MenuContext)

  function handleKeyDown({ key }) {
    const nextItem = itemRef?.current?.nextSibling
    const prevItem = itemRef?.current?.previousSibling
    switch (key) {
      case "ArrowDown": {
        if (nextItem) nextItem.focus()
        break
      }
      case "ArrowUp": {
        if (prevItem) prevItem.focus()
        break
      }
      case "Escape": {
        closeMenu()
        break
      }
      default:
        break
    }
  }
  useImperativeHandle(ref, () => ({ ...itemRef }))
  return (
    <ItemWrapper
      {...props}
      ref={itemRef}
      role="menuitem"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={(e) => {
        if (closeOnClick) closeMenu()
        if (typeof onClick === "function") onClick(e)
      }}
    />
  )
}

const MenuItem = memo(forwardRef(Item))

export { Menu, MenuTarget, MenuList, MenuItem }
