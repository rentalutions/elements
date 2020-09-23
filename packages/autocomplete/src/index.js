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
    throw Error("Must use autocomplete within an Autocomplete Provider")
  return state
}

const initialState = {
  selection: null,
  suggestions: [],
  sessionToken: null,
  error: false,
  notFound: false,
}

function autocompleteReducer(state, action) {
  switch (action.type) {
    case "ADD_TOKEN":
      return { ...state, sessionToken: action.payload }
    case "UPDATE_SUGGESTIONS":
      return { ...state, suggestions: action.payload, notFound: false }
    case "SELECT_PLACE":
      const { selection, sessionToken } = action.payload
      return { ...state, selection, suggestions: [], sessionToken }
    case "ZERO_RESULTS":
      return { ...state, notFound: true, suggestions: [] }
    case "CLEAR_SELECTION":
      return { ...state, selection: null, suggestions: [], notFound: false }
    case "ERROR":
      return { ...state, selection: null, suggestions: [], error: true }
    default:
      throw new Error("Must dispatch a known action.")
  }
}

export function useAutocomplete(input = "") {
  const { loaded, error } = useAutocompleteKey()
  const autocompleteRef = useRef(null)
  const placesRef = useRef(null)
  const [state, dispatch] = useReducer(autocompleteReducer, initialState)

  async function getDetails(id, onSelect) {
    const request = {
      placeId: id,
      fields: ["address_components", "formatted_address"],
      sessionToken: state.sessionToken,
    }
    const newToken = new google.maps.places.AutocompleteSessionToken()

    function setSelection(place, status) {
      if (status === "OK") {
        dispatch({
          type: "SELECT_PLACE",
          payload: {
            selection: place.formatted_address,
            sessionToken: newToken,
          },
        })
        onSelect(place)
      }
    }

    placesRef.current.getDetails(request, setSelection)
  }

  function clearSelection(onClear) {
    onClear()
    dispatch({
      type: "CLEAR_SELECTION",
    })
  }

  useEffect(() => {
    // Load services into references for later and create a session token.
    if (loaded && !error) {
      // eslint-disable-next-line no-undef
      autocompleteRef.current = new google.maps.places.AutocompleteService()
      // eslint-disable-next-line no-undef
      placesRef.current = new google.maps.places.PlacesService(
        document.createElement("div")
      )
      dispatch({
        type: "ADD_TOKEN",
        // eslint-disable-next-line no-undef
        payload: new google.maps.places.AutocompleteSessionToken(),
      })
    }
  }, [loaded])

  function updateSuggestions(suggestions, status) {
    switch (status) {
      case "OK":
        return dispatch({
          type: "UPDATE_SUGGESTIONS",
          payload: suggestions,
        })
      case "ZERO_RESULTS":
        return dispatch({ type: "ZERO_RESULTS" })
      default:
        dispatch({ type: "ERROR", payload: status })
    }
  }

  useEffect(() => {
    // Get autocomplete suggestions based on input. Limit calls to inputs over 3
    // characters so we're not trying to guess too early.
    if (input.length > 3) {
      const request = {
        input,
        types: ["address"],
        sessionToken: state.sessionToken,
      }

      autocompleteRef.current.getPlacePredictions(request, updateSuggestions)
    } else {
      dispatch({ type: "UPDATE_SUGGESTIONS", payload: [] })
    }
  }, [input])
  return { ...state, getDetails, clearSelection }
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

const ManualLink = styled.a`
  font-weight: ${({ theme }) => theme.fontWeights.black};
`

export function Autocomplete({ onSelect = noop, onClear = noop, ...props }) {
  const targetRef = useRef()
  const [input, setInput] = useState("")
  const {
    suggestions,
    notFound,
    getDetails,
    selection,
    clearSelection,
  } = useAutocomplete(input)
  function handleChange({ target }) {
    setInput(target.value)
  }
  function handleSelect(place) {
    setInput(" ")
    getDetails(place.place_id, onSelect)
  }
  function handleFocus() {
    if (selection) {
      setInput("")
      clearSelection(onClear)
    }
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
          {selection}
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
      {notFound && (
        <Box
          position="absolute"
          top="calc(100% + 1rem)"
          bg="ui_100"
          width="100%"
          p="2rem"
        >
          No results found. <ManualLink>Enter an address manually</ManualLink>
        </Box>
      )}
    </Box>
  )
}
