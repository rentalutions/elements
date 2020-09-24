import { useRef, useReducer, useEffect, useContext } from "react"
import { AutocompleteContext } from "./AutocompleteProvider"

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
  const {
    payload: { selection = null, sessionToken = null, suggestions = [] } = {},
  } = action
  switch (action.type) {
    case "ADD_TOKEN":
      return { ...state, sessionToken }
    case "UPDATE_SUGGESTIONS":
      return { ...state, suggestions, notFound: false }
    case "SELECT_PLACE":
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

export default function useAutocomplete(input = "") {
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
    // Instantiate services for later and create a session token.
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
        payload: {
          sessionToken: new google.maps.places.AutocompleteSessionToken(),
        },
      })
    }
  }, [loaded])

  function updateSuggestions(suggestions, status) {
    switch (status) {
      case "OK":
        return dispatch({
          type: "UPDATE_SUGGESTIONS",
          payload: { suggestions },
        })
      case "ZERO_RESULTS":
        return dispatch({ type: "ZERO_RESULTS" })
      default:
        dispatch({ type: "ERROR", payload: { status } })
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
