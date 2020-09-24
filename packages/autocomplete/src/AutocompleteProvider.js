import React, { createContext } from "react"
import { useScript } from "@rent_avail/utils"

export const AutocompleteContext = createContext()

export function AutocompleteProvider({ apiKey, children }) {
  const { loaded, error } = useScript(
    `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
  )
  return (
    <AutocompleteContext.Provider value={{ error, loaded }}>
      {children}
    </AutocompleteContext.Provider>
  )
}
