import {
  KeyboardEvent,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react"

interface ContainerProps {
  tabIndex: number
  onFocus(): void
  onKeyDown(e: KeyboardEvent): void
}

interface TargetProps {
  tabIndex: number
  ref(element: HTMLElement | null): void
}

export interface RovingIndexReturn {
  activeIndex: number
  containerProps: ContainerProps
  getTargetProps(index: number): TargetProps
}

export function useRovingIndex(): RovingIndexReturn {
  const [activeIndex, setActiveIndex] = useState(0)
  const intialized = useRef(false)
  const targets = useRef<HTMLElement[] | null>([])

  const getRef = useCallback((node: HTMLElement | null) => {
    if (targets.current.includes(node)) return
    targets.current.push(node)
  }, [])

  const getTargetProps = useCallback(
    (index: number) => ({
      ref: getRef,
      tabIndex: activeIndex === index ? 0 : -1,
    }),
    [activeIndex, getRef]
  )

  const focusPrevItem = useCallback(() => {
    if (activeIndex - 1 >= 0) {
      setActiveIndex((idx) => idx - 1)
    }
  }, [activeIndex])

  const focusNextItem = useCallback(() => {
    if (activeIndex + 1 < targets.current.length) {
      setActiveIndex((idx) => idx + 1)
    }
  }, [activeIndex])

  const onFocus = useCallback(() => {
    targets.current[activeIndex]?.focus()
  }, [activeIndex])

  const onKeyDown = useCallback(
    (event) => {
      const { key } = event
      event.preventDefault()
      if (key === "ArrowRight" || key === "ArrowDown") {
        focusNextItem()
      }
      if (key === "ArrowLeft" || key === "ArrowUp") {
        focusPrevItem()
      }
    },
    [focusNextItem, focusPrevItem]
  )

  useEffect(() => {
    if (intialized.current) {
      targets.current[activeIndex]?.focus()
    } else {
      intialized.current = true
    }
  }, [activeIndex])

  return {
    activeIndex,
    containerProps: { tabIndex: -1, onFocus, onKeyDown },
    getTargetProps,
  }
}

// function isPreceding(a, b) {
//   return Boolean(
//     a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_PRECEDING
//   )
// }

// function rovingIndexReducer(state, action) {
//   const { stops } = state
//   switch (action.type) {
//     case "register":
//       const { id, ref } = action
//       if (stops.length === 0) return { ...state, stops: [{ id, ref }] }

//       const index = stops.findIndex((stop) => stop.id === id)
//       if (index >= 0) return state

//       const insertIndex = stops.findIndex((stop) => {
//         if (!stop.ref.current || !ref.current) return false
//         return isPreceding(stop.ref.current, ref.current)
//       })

//       if (insertIndex === -1) {
//         return { ...state, stops: [...stops, { id, ref }] }
//       }

//       return {
//         ...state,
//         stops: [
//           ...stops.slice(0, insertIndex),
//           { id, ref },
//           ...stops.slice(insertIndex),
//         ],
//       }

//     default:
//       throw Error("unkown action for roving index")
//   }
// }

// function useRover({ loop = false }) {
//   const [state, dispatch] = useReducer(rovingIndexReducer, { stops: [], loop })
//   const register = useCallback(
//     (ref, id) => dispatch({ type: "register", payload: { id, ref } }),
//     []
//   )
//   return {
//     containerProps: { tabIndex: -1, onFocus() {}, onKeyDown() {} },
//     rovingProps: { register },
//   }
// }
