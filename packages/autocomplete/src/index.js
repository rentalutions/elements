import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useRef,
  useReducer,
} from "react"
import styled from "styled-components"
import Input from "@rent_avail/input"
import { Box } from "@rent_avail/layout"
import { noop, useScript } from "@rent_avail/utils"

const AutocompleteContext = createContext()

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

function useAutocompleteKey() {
  const state = useContext(AutocompleteContext)
  if (state === "undefined")
    throw Error(
      "Must use autocomplete component within an Autocomplete Provider"
    )
  return state
}

const initialState = {
  selection: null,
  suggestions: [],
  sessionToken: null,
  error: false,
}

function autocompleteReducer(state, action) {
  switch (action.type) {
    case "ADD_TOKEN":
      return { ...state, sessionToken: action.payload }
    case "UPDATE_SUGGESTIONS":
      return { ...state, suggestions: action.payload }
    case "SELECT_PLACE":
      const { selection, sessionToken } = action.payload
      return { ...state, selection, suggestions: [], sessionToken }
    case "CLEAR_SELECTION":
      return { ...state, selection: null, suggestions: [] }
    case "ERROR":
      return { ...state, selection: null, suggestions: [], error: true }
    default:
      throw new Error("Must dispatch a known action.")
  }
}

export function useAutocomplete(input = "") {
  const { loaded, error } = useAutocompleteKey()
  const autocompleteRef = useRef(null)
  const [state, dispatch] = useReducer(autocompleteReducer, initialState)
  function selectPlace(place) {
    // Get place details, replace token, and send the place details to the instance.
    const newToken = new google.maps.places.AutocompleteSessionToken()
    dispatch({
      type: "SELECT_PLACE",
      payload: { selection: place, sessionToken: newToken },
    })
  }
  function clearSelection() {
    dispatch({
      type: "CLEAR_SELECTION",
    })
  }
  useEffect(() => {
    if (loaded && !error) {
      autocompleteRef.current = new google.maps.places.AutocompleteService()
      dispatch({
        type: "ADD_TOKEN",
        payload: new google.maps.places.AutocompleteSessionToken(),
      })
    }
  }, [loaded])
  useEffect(() => {
    if (input.length > 3) {
      const params = {
        input,
        types: ["address"],
        sessionToken: state.sessionToken,
      }
      autocompleteRef.current.getPlacePredictions(
        params,
        (suggestions, status) => {
          if (status === "OK")
            dispatch({ type: "UPDATE_SUGGESTIONS", payload: suggestions })
          else dispatch({ type: "ERROR", payload: status })
        }
      )
    } else {
      dispatch({ type: "UPDATE_SUGGESTIONS", payload: [] })
    }
  }, [input])
  return { ...state, selectPlace, clearSelection }
}

const PlaceItem = styled(Box)`
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.blue_100};
  }
`

const Selection = styled(Box)`
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
`

const LogoWrapper = styled.svg`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
`

function GoogleLogo() {
  return (
    <LogoWrapper viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
      />
    </LogoWrapper>
  )
}

export function Autocomplete({ onSelect = noop, ...props }) {
  const targetRef = useRef()
  const [input, setInput] = useState("")
  const {
    suggestions,
    error,
    selectPlace,
    selection,
    clearSelection,
  } = useAutocomplete(input)
  function handleChange({ target }) {
    setInput(target.value)
  }
  function handleSelect(place) {
    onSelect(place)
    setInput(" ")
    selectPlace(place)
  }
  function handleFocus() {
    setInput("")
    clearSelection()
  }
  return (
    <Box position="relative">
      <Input
        {...props}
        ref={targetRef}
        onChange={handleChange}
        onFocus={handleFocus}
        value={input}
      />
      {selection && (
        <Selection
          position="absolute"
          maxWidth="calc(100% - 4rem)"
          top="3.25rem"
          left="2rem"
          px="0.5rem"
          py="0.25rem"
          bg="blue_100"
          borderRadius="4px"
        >
          {selection.description}
        </Selection>
      )}
      {suggestions.length > 0 && (
        <Box
          as="ul"
          position="absolute"
          top="calc(100% + 1rem)"
          width="100%"
          bg="ui_100"
          mb="2rem"
          borderRadius="4px"
        >
          <GoogleLogo />
          {suggestions.map((place) => {
            // terms [street_number, street_name, city, state, country]
            return (
              <PlaceItem
                key={place.place_id}
                p="2rem"
                onClick={(e) => handleSelect(place)}
              >
                {place.description}
              </PlaceItem>
            )
          })}
        </Box>
      )}
    </Box>
  )
}
