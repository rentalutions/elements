import React, {
  createContext,
  useReducer,
  useContext,
  Fragment,
  useEffect,
  useMemo,
} from "react"
import { createPortal } from "react-dom"
import { Box } from "@rent_avail/layout"
import { getId, usePortal } from "@rent_avail/utils"
import { motion, AnimatePresence } from "framer-motion"

const ToastContext = createContext()

function toastReducer(state, action) {
  switch (action.type) {
    case "INSERT_TOAST": {
      const { payload: toast } = action
      const update = state.toasts.find(({ id }) => id === toast.id)
      if (update) {
        return {
          ...state,
          toasts: state.toasts.map((t) =>
            t.id === toast.id ? { ...t, ...toast } : t
          ),
        }
      }
      return { ...state, toasts: [...state.toasts, action.payload] }
    }
    case "REMOVE_TOAST":
      if (action.payload === undefined) {
        return { ...state, toasts: [] }
      }
      return {
        ...state,
        toasts: state.toasts.filter(({ id }) => id !== action.payload),
      }
    case "UPDATE_TOAST":
      const { payload: toast } = action
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toast ? { ...t, ...toast } : t
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
  loading: 6000,
}

const typeStyles = {
  blank: {
    bg: "ui_900",
    color: "ui_100",
    borderColor: "ui_900",
  },
  success: {
    bg: "green_500",
    color: "ui_900",
    borderColor: "green_900",
  },
  error: {
    bg: "red_300",
    color: "ui_900",
    borderColor: "red_500",
  },
  loading: {
    bg: "ui_300",
    borderColor: "ui_500",
    color: "ui_700",
  },
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
  function createToast(type = "blank") {
    return function (children, options = {}) {
      const { id = getId(), duration = 4000, ...opts } = options
      const toast = {
        "aria-live": "polite",
        children,
        createdAt: Date.now(),
        duration: durationDefaults[type],
        id,
        pausedDuration: 0,
        role: type === "error" ? "alert" : "status",
        type,
        visible: true,
        ...opts,
      }
      toast.dismiss = (id) => {
        dispatch({ type: "REMOVE_TOAST", payload: id })
      }
      dispatch({
        type: "INSERT_TOAST",
        payload: toast,
      })
      return toast.id
    }
  }
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
      {portalTarget &&
        createPortal(
          <Box
            className="toast-wrapper"
            sx={{
              position: "fixed",
              p: "2rem",
              display: "flex",
              flexDirection: "column-reverse",
              gap: "1rem",
              alignItems: "flex-start",
              zIndex: 999,
              ...positionStyles,
            }}
          >
            <AnimatePresence>
              {toasts.map(({ sx = {}, children, type, ...props }) => (
                <Box
                  {...props}
                  layout
                  key={props.id}
                  as={motion.section}
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
                  {(type === "loading") & (typeof children !== "function") ? (
                    <Box
                      as={motion.span}
                      sx={{
                        mr: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyConent: "center",
                      }}
                    >
                      <LoadingIcon />
                    </Box>
                  ) : null}
                  {returnValue(children, props)}
                </Box>
              ))}
            </AnimatePresence>
          </Box>,
          portalTarget
        )}
    </Fragment>
  )
}

function useToast() {
  const { createToast } = useContext(ToastContext)
  const toast = useMemo(
    () => ({
      blank: createToast("blank"),
      success: createToast("success"),
      error: createToast("error"),
      loading: createToast("loading"),
      promise: async (promise, { loading, success, error }, options) => {
        const id = createToast("loading")(loading, options)
        try {
          const result = await promise
          createToast("success")(returnValue(success, result), {
            id,
            ...options,
          })
        } catch (e) {
          createToast("error")(returnValue(error, e), { id, ...options })
        } finally {
          return promise
        }
      },
    }),
    []
  )
  return toast
}

function LoadingIcon() {
  return (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 2 }}
      xmlns="http://www.w3.org/2000/motion.svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
    </motion.svg>
  )
}

export { ToastProvider, useToast }
