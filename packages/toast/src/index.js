import {
  createContext,
  useReducer,
  useContext,
  Fragment,
  useEffect,
  useCallback,
} from "react"
import { createPortal } from "react-dom"
import { Box } from "@rent_avail/layout"
import { getId, usePortal } from "@rent_avail/utils"
import { motion, AnimatePresence } from "framer-motion"

const ToastContext = createContext()

function toastReducer(state, action) {
  switch (action.type) {
    case "INSERT_TOAST":
      return { ...state, toasts: [...state.toasts, action.payload] }
    case "REMOVE_TOAST":
      if (action.payload === undefined) {
        return { ...state, toasts: [] }
      }
      return {
        ...state,
        toasts: state.toasts.filter(({ id }) => id !== action.payload),
      }
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === action.payload.id
            ? { ...toast, ...action.payload }
            : toast
        ),
      }
    default:
      throw Error(`Unknown action: ${action.type}`)
  }
}

function returnValue(value, arg) {
  return typeof value === "function" ? value(arg) : value
}

const durationDefaults = {
  blank: 4000,
  success: 2000,
  error: 4000,
}

function getPositionStyles(position) {
  const top = position.includes("top")
  const left = position.includes("left")
  const right = position.includes("right")
  const vertical = top ? { top: 0 } : { bottom: 0 }
  const horizontal = left
    ? { left: 0 }
    : right
    ? { right: 0 }
    : { right: 0, left: 0, alignItems: "center", pointerEvents: "none" }
  return { ...vertical, ...horizontal }
}

function ToastProvider({ position = "bottom-left", ...props }) {
  const [{ toasts, paused }, dispatch] = useReducer(toastReducer, {
    toasts: [],
    paused: undefined,
  })
  const portalTarget = usePortal()
  const positionStyles = getPositionStyles(position)
  const createToast = useCallback(
    (type = "blank") => (children, options = {}) => {
      const { id = getId(), duration = 4000, ...opts } = options
      const toast = {
        id,
        type,
        children,
        duration: durationDefaults[type],
        visible: true,
        pausedDuration: 0,
        createdAt: Date.now(),
        role: type === "error" ? "alert" : "status",
        "aria-live": "polite",
        ...opts,
      }
      dispatch({ type: "INSERT_TOAST", payload: toast })
      toast.dismiss = (id) => {
        dispatch({ type: "REMOVE_TOAST", payload: id })
      }
      return toast.id
    },
    [dispatch]
  )
  useEffect(() => {
    if (paused) return
    const now = Date.now()
    const timeouts = toasts.map((toast) => {
      const timeLeft =
        (toast.duration || 0) + toast.pausedDuration - (now - toast.createdAt)
      if (timeLeft < 0) {
        if (toast.visible) toast.dismiss(toast.id)
        return
      }
      return setTimeout(() => toast.dismiss(toast.id), timeLeft)
    })
    return () => timeouts.forEach((timeout) => timeout && clearTimeout(timeout))
  }, [toasts, paused])
  return (
    <Fragment>
      <ToastContext.Provider
        {...props}
        value={{ toasts, paused, createToast }}
      />
      {createPortal(
        <Box
          className="toast-wrapper"
          sx={{
            position: "fixed",
            p: "2rem",
            display: "flex",
            flexDirection: "column-reverse",
            gap: "1rem",
            ...positionStyles,
          }}
        >
          <AnimatePresence>
            {toasts.map(({ sx = {}, children, type, ...props }) => {
              const typeStyles = {
                blank: {
                  bg: "blue_700",
                  color: "blue_100",
                  borderColor: "blue_900",
                },
                success: {
                  bg: "green_900",
                  color: "green_300",
                  borderColor: "green_900",
                },
                error: {
                  bg: "red_300",
                  color: "ui_900",
                  borderColor: "red_500",
                },
              }
              return (
                <Box
                  {...props}
                  layout
                  key={props.id}
                  as={motion.div}
                  variants={{
                    shown: { opacity: 1, y: "0rem" },
                    hidden: { opacity: 0, y: "1rem" },
                  }}
                  initial="hidden"
                  animate="shown"
                  exit="hidden"
                  sx={{
                    display: "inline-flex",
                    flexGrow: 0,
                    p: "2rem",
                    borderRadius: "0.25rem",
                    border: "1px solid transparent",
                    maxWidth: "40rem",
                    pointerEvents: "all",
                    ...typeStyles[type],
                    ...sx,
                  }}
                >
                  {returnValue(children, props)}
                </Box>
              )
            })}
          </AnimatePresence>
        </Box>,
        portalTarget
      )}
    </Fragment>
  )
}

function useToast() {
  const { createToast } = useContext(ToastContext)
  const toast = createToast("blank")
  toast.success = createToast("success")
  toast.error = createToast("error")
  return toast
}

export { ToastProvider, useToast }
