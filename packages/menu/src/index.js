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
import { Box, Card } from "@rent_avail/core"
import Popover from "@rent_avail/popover"
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

  function handleClick({ target }) {
    if (
      isOpen &&
      menuRef.current &&
      !menuRef.current.contains(target) &&
      !targetRef.current.contains(target)
    ) {
      closeMenu()
    }
  }

  function handleBlur() {
    requestAnimationFrame(() => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(document.activeElement) &&
        !targetRef.current.contains(document.activeElement)
      ) {
        closeMenu()
      }
    })
  }

  function removeEventListeners() {
    document.removeEventListener("click", handleClick)
    document.removeEventListener("focusout", handleBlur)
  }

  useEffect(() => {
    return removeEventListeners
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClick)
      document.addEventListener("focusout", handleBlur)
    } else {
      removeEventListeners()
    }
  }, [isOpen])

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
    useMenuContext()
  const { onClick, onKeyDown } = children.props
  function handleKeyDown(event) {
    switch (event.key) {
      case "Enter":
      case " ": {
        if (isOpen) {
          closeMenu()
        } else {
          openMenu()
        }
        event.preventDefault()
        break
      }
      case "Escape": {
        closeMenu()
        event.preventDefault()
        break
      }
      case "ArrowDown": {
        menuRef.current?.firstChild?.firstChild?.focus()
        event.preventDefault()
        break
      }
      default:
        break
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
  const { targetRef, menuRef, popoverRef, parentRef, isOpen } =
    useMenuContext()
  return isOpen ? (
    <Popover
      targetRef={targetRef}
      parentRef={parentRef}
      ref={popoverRef}
      position={position}
      sx={{
        zIndex: 999,
        ...sx,
      }}
    >
      <StyledList as="ul" {...rest} ref={mergeRefs(ref, menuRef)}>
        {children}
      </StyledList>
    </Popover>
  ) : null
}

const MenuList = memo(forwardRef(List))

const ItemWrapper = forwardRef(({ children, sx, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      as="li"
      sx={{
        display: "block",
        padding: "2rem",
        cursor: "pointer",
        outline: "none",
        "&:hover, &:first-child:focus": {
          backgroundColor: "ui_300",
        },
        "&:not(:last-of-type)": {
          borderBottomStyle: "solid",
          borderBottomWidth: 1,
          borderBottomColor: "ui_500",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  )
})

function Item({ onClick, closeOnClick, ...props }, ref) {
  const itemRef = useRef()
  const { closeMenu, targetRef } = useMenuContext()

  function handleKeyDown(event) {
    if (itemRef.current?.firstChild === event.target) {
      const nextItem = itemRef?.current?.nextSibling
      const prevItem = itemRef?.current?.previousSibling
      switch (event.key) {
        case "ArrowUp":
        case "ArrowLeft": {
          if (prevItem) prevItem.firstChild?.focus()
          event.preventDefault()
          break
        }
        case "ArrowDown":
        case "ArrowRight": {
          if (nextItem) nextItem.firstChild?.focus()
          event.preventDefault()
          break
        }
        case " ":
        case "Enter": {
          event.target.click()
          event.preventDefault()
          break
        }
        case "Escape": {
          closeMenu()
          targetRef.current.focus()
          event.preventDefault()
          break
        }
        default:
          break
      }
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
  useImperativeHandle(ref, () => ({ ...itemRef }))
  return (
    <ItemWrapper
      ref={itemRef}
      onClick={(e) => {
        if (closeOnClick) closeMenu()
        if (typeof onClick === "function") onClick(e)
      }}
      {...props}
    />
  )
}

const MenuItem = memo(forwardRef(Item))

export function useMenuContext() {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error("MenuContext is undefined.")
  }
  return context
}

export { Menu, MenuTarget, MenuList, MenuItem }
