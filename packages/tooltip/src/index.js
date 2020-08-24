import React, {
  cloneElement,
  forwardRef,
  useImperativeHandle,
  createContext,
  useReducer,
  useRef,
  useContext,
  Children,
} from "react"
import styled from "styled-components"
import { wrapEvent } from "@rent_avail/utils"
import Popover from "@rent_avail/popover"

const TooltipContext = createContext()

const OPEN_TOOLTIP = "@rent_avail/tooltip/open_tooltip"
const CLOSE_TOOLTIP = "@rent_avail/tooltip/close_tooltip"

const initialState = {
  isOpen: false,
}

function tooltipReducer(state, action) {
  switch (action.type) {
    case OPEN_TOOLTIP:
      return { ...state, isOpen: true }
    case CLOSE_TOOLTIP:
      return { ...state, isOpen: false }
    default:
      throw Error("Must dispatch a known action from Tooltip Reducer.")
  }
}

function Tooltip({ children, parentRef, id }) {
  const [state, dispatch] = useReducer(tooltipReducer, initialState)
  const targetRef = useRef()
  const tooltipRef = useRef()
  const popoverRef = useRef()
  const context = { state, dispatch, id, parentRef, targetRef, tooltipRef, popoverRef }
  return (
    <TooltipContext.Provider value={context}>
      {children}
    </TooltipContext.Provider>
  )
}

function Target({ children, ...props }, ref) {
  const {
    id,
    targetRef,
    state: { isOpen },
    dispatch,
  } = useContext(TooltipContext)
  useImperativeHandle(ref, () => ({ ...targetRef }))
  const child = Children.only(children)
  const { onBlur, onFocus, onMouseEnter, onMouseLeave, style } = child.props
  function handleOpen() {
    dispatch({ type: OPEN_TOOLTIP })
  }
  function handleClose() {
    dispatch({ type: CLOSE_TOOLTIP })
  }
  return cloneElement(child, {
    ...props,
    ref: targetRef,
    id,
    tabIndex: 0,
    type: "button",
    "aria-haspopup": "menu",
    "aria-expanded": isOpen,
    style: { outline: "none", ...style },
    onFocus: wrapEvent(onFocus, handleOpen),
    onBlur: wrapEvent(onBlur, handleClose),
    onMouseEnter: wrapEvent(onMouseEnter, handleOpen),
    onMouseLeave: wrapEvent(onMouseLeave, handleClose),
  })
}

const TooltipTarget = forwardRef(Target)

const StyledTooltip = styled.aside`
  display: block;
  max-width: 20rem;
  background: ${({ theme }) => theme.colors.blue_700};
  color: ${({ theme }) => theme.colors.ui_100};
  padding: 1rem;
  border-radius: 4px;
`

function Content({ children, position, ...props }, ref) {
  const {
    id,
    state: { isOpen },
    parentRef,
    tooltipRef,
    popoverRef,
    targetRef,
  } = useContext(TooltipContext)
  useImperativeHandle(ref, () => ({ ...tooltipRef }))
  return isOpen ? (
    <Popover
      style={{ zIndex: "9999" }}
      targetRef={targetRef}
      ref={popoverRef}
      parentRef={parentRef}
      position={position}
    >
      <StyledTooltip
        {...props}
        ref={tooltipRef}
        role="tooltip"
        id={id}
        aria-hidden={!isOpen}
      >
        {children}
      </StyledTooltip>
    </Popover>
  ) : null
}

const TooltipContent = forwardRef(Content)

export { Tooltip, TooltipTarget, TooltipContent }
