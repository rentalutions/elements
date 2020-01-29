import React, {
  cloneElement,
  forwardRef,
  useImperativeHandle,
  createContext,
  useReducer,
  useRef,
  useContext,
  Children
} from "react"
import styled from "styled-components"
import { colors } from "src/constants"
import Popover from "src/popover"

const TooltipContext = createContext()

const OPEN_TOOLTIP = "@rent_avail/tooltip/open_tooltip"
const CLOSE_TOOLTIP = "@rent_avail/tooltip/close_tooltip"

const initialState = {
  isOpen: false
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

function Tooltip({ children, id }) {
  const [state, dispatch] = useReducer(tooltipReducer, initialState)
  const targetRef = useRef()
  const tooltipRef = useRef()
  const popoverRef = useRef()
  const context = { state, dispatch, id, targetRef, tooltipRef, popoverRef }
  return <TooltipContext.Provider value={context}>{children}</TooltipContext.Provider>
}

function wrapEvent(first, second) {
  return event => {
    if (first) first(event)
    if (!event.defaultPrevented) second(event)
  }
}

function Target({ children, ...props }, ref) {
  const {
    id,
    targetRef,
    state: { isOpen },
    dispatch
  } = useContext(TooltipContext)
  useImperativeHandle(ref, () => ({ ...targetRef }))
  const child = Children.only(children)
  const { onBlur, onFocus, onMouseEnter, onMouseLeave } = child.props
  function handleToggle() {
    dispatch({ type: OPEN_TOOLTIP })
  }
  function handleClose() {
    dispatch({ type: CLOSE_TOOLTIP })
  }
  return cloneElement(child, {
    ...props,
    ref: targetRef,
    id,
    type: "button",
    "aria-haspopup": "menu",
    "aria-expanded": isOpen,
    onFocus: wrapEvent(onFocus, handleToggle),
    onBlur: wrapEvent(onBlur, handleClose),
    onMouseEnter: wrapEvent(onMouseEnter, handleToggle),
    onMouseLeave: wrapEvent(onMouseLeave, handleClose)
  })
}

const TooltipTarget = forwardRef(Target)

const StyledTooltip = styled.aside`
  min-width: 10rem;
  max-width: 40rem;
  background: ${colors.blue_700};
  color: ${colors.ui_100};
  padding: 1rem;
  border-radius: 4px;
  margin-right: 2rem;
`

function Content({ children, ...props }, ref) {
  const {
    id,
    state: { isOpen },
    tooltipRef,
    popoverRef,
    targetRef
  } = useContext(TooltipContext)
  useImperativeHandle(ref, () => ({ ...tooltipRef }))
  return isOpen ? (
    <Popover targetRef={targetRef} ref={popoverRef}>
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

export { Tooltip as default, TooltipTarget, TooltipContent }
