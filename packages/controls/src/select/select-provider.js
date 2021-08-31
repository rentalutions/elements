import { createContext, useReducer, useRef } from "react"
import { Box } from "@rent_avail/core"
import { noop } from "@rent_avail/utils"

/**
 * Select: Input that let's the user choose from a list of pre-defined values.
 *
 * Selects should be used to help a user choose from a list of 5 or more values. The
 * component shows the currently select value an allows the user to open a menu to change
 * their selection. Select components can be optionally searchable. To view helpful
 * examples to go https://design.avail.co/elements/controls#select
 *
 * @example
 *
 * <Select>
 *   <SelectInput label="State" />
 *   <SelectList>
 *     <SelectItem value="IL" label="Illinois" >Illinois</SelectItem>
 *   </SelectList>
 * </Select>
 */

export const SelectContext = createContext(null)

export const SelectActions = {
  openList: "OPEN_LIST",
  closeList: "CLOSE_LIST",
  updateSearchValue: "UPDATE_SEARCH_VALUE",
  selectValue: "SELECT_VALUE",
  removeToken: "REMOVE_TOKEN",
}

function selectReducer(state, action) {
  switch (action.type) {
    case SelectActions.openList:
      return { ...state, open: true }
    case SelectActions.closeList:
      return { ...state, open: false }
    case SelectActions.updateSearchValue:
      return { ...state, searchValue: action.payload }
    case SelectActions.selectValue:
      const multi = state.multi
      const mergedTokens = [...state.tokens, ...action.payload]
      return {
        ...state,
        searchValue: "",
        tokens: multi ? mergedTokens : action.payload,
        open: multi ? true : false,
      }
    case SelectActions.removeToken:
      const newArray = state.tokens.filter(action.payload)
      return { ...state, tokens: newArray }
    default:
      throw Error("Unknown action: " + action.type)
  }
}

export function Select({
  children,
  multi = false,
  onSelect = noop,
  id,
  sx,
  defaultValue = [],
}) {
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const [state, dispatch] = useReducer(selectReducer, {
    open: false,
    multi,
    id,
    searchValue: "",
    tokens: [...defaultValue],
  })
  const context = {
    state,
    dispatch,
    inputRef,
    listRef,
    onSelect,
  }
  return (
    <SelectContext.Provider value={context}>
      <Box sx={sx}>{children}</Box>
    </SelectContext.Provider>
  )
}
