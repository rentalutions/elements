import { useCallback, useEffect, useReducer } from "react"

interface AsyncDataState {
  loading: boolean
  data: any
  error: any
}

type AsyncDataActions =
  | { type: "loaded"; payload: any }
  | { type: "error"; payload: any }
  | { type: "loading" }

interface AsyncDataOptions {
  lazy?: boolean
  url: string
  options?: any
}

function asyncDataReducer(
  state: AsyncDataState,
  action: AsyncDataActions
): AsyncDataState {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true }
    case "loaded":
      return { loading: false, data: action.payload, error: null }
    case "error":
      return { loading: false, data: null, error: action.payload }
    default:
      throw new Error(`Unknown action type`)
  }
}

export function useAsyncData({
  lazy = false,
  url,
  options = {},
}: AsyncDataOptions) {
  const [state, dispatch] = useReducer(asyncDataReducer, {
    loading: !lazy,
    data: null,
    error: null,
  })
  const getData = useCallback(async () => {
    dispatch({ type: "loading" })
    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        return dispatch({ type: "loaded", payload: data })
      }
      throw new Error(`AsyncDataHook HTTP Error: ${response.status}`)
    } catch (error) {
      dispatch({ type: "error", payload: error })
    }
  }, [url, options])
  useEffect(() => {
    let canceled = false
    if (!canceled && !lazy) getData()
    return () => {
      canceled = true
    }
  }, [lazy])
  return { ...state, refetch: getData }
}
