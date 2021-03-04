import React, { createContext, useRef, useReducer } from "react"
import { noop } from "@rent_avail/utils"

export const SelectContext = createContext()

export const types = {
  OPEN_LIST: "@rent_avail/elements/select/open_list",
  CLOSE_LIST: "@rent_avail/elements/select/close_list",
  UPDATE_WIDTH: "@rent_avail/elements/select/update_width",
  UPDATE_INPUT: "@rent_avail/elements/select/update_input",
  SET_VALUE: "@rent_avail/elements/select/set_value",
  SET_ERROR: "@rent_avail/elements/select/set_value",
}

function selectReducer(state, action) {
  switch (action.type) {
    case types.OPEN_LIST:
      return { ...state, isOpen: true }
    case types.CLOSE_LIST:
      return { ...state, isOpen: false, typeAheadQuery: "" }
    case types.UPDATE_WIDTH:
      return { ...state, width: action.payload }
    case types.UPDATE_INPUT:
      return {
        ...state,
        typeAheadQuery: action.payload,
        value: "",
        defaultLabel: "",
      }
    case types.SET_VALUE:
      return {
        ...state,
        isOpen: false,
        value: action.payload,
        defaultLabel: "",
        typeAheadQuery: "",
      }
    default:
      throw Error(`Unknown action type ${action.type}.`)
  }
}

export function SelectProvider({
  children,
  id,
  onSelect = noop,
  disabled = false,
  defaultValue = "",
  defaultLabel = "",
  search = true,
}) {
  const inputRef = useRef()
  const listRef = useRef()
  const [state, dispatch] = useReducer(selectReducer, {
    value: defaultValue,
    defaultLabel,
    typeAheadQuery: "",
    width: 120,
    isOpen: false,
    search,
    disabled,
  })
  const contextValue = { state, dispatch, listRef, inputRef, onSelect, id }
  return (
    <SelectContext.Provider value={contextValue}>
      {children}
    </SelectContext.Provider>
  )
}
