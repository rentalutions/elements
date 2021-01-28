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
  const createToast = useCallback(
    (type = "blank") => (children, options = {}) => {
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
  const toast = createToast("blank")
  toast.success = createToast("success")
  toast.error = createToast("error")
  toast.loading = createToast("loading")
  toast.promise = async (
    promise,
    { loading, success, error },
    options = {}
  ) => {
    const id = toast.loading(loading, {
      ...options,
      ...options?.loading,
    })
    promise
      .then((res) => {
        toast.success(success, {
          id,
          ...options,
          ...options?.success,
        })
        return res
      })
      .catch((promiseError) => {
        toast.error(error, {
          ...options,
          ...options?.error,
          error: promiseError,
        })
      })
    return promise
  }
  return toast
}

export { ToastProvider, useToast }
