import { useRef, useReducer, useEffect } from "react"

const initialState = {
  input: "",
  selection: null,
  suggestions: [],
  sessionToken: null,
  error: false,
  notFound: false,
}

const actionTypes = {
  UPDATE_INPUT: "avail/autocomplete/update_input",
  UPDATE_SUGGESTIONS: "avail/autocomplete/update_suggestions",
  UPDATE_SELECTION: "avail/autocomplete/update_selection",
  UPDATE_TOKEN: "avail/autocomplete/update_token",
  CLEAR_STATE: "avail/autocomplete/clear",
  ERROR: "avail/autocomplete/error",
  SET_MANUAL: "avail/autocomplete/set_manual",
}

function autocompleteReducer(state, action) {
  switch (action.type) {
    case actionTypes.UPDATE_TOKEN:
      return { ...state, sessionToken: action.payload }
    case actionTypes.UPDATE_SUGGESTIONS:
      return { ...state, suggestions: action.payload, notFound: false }
    case actionTypes.UPDATE_SELECTION:
      const { selection, sessionToken } = action.payload
      return { ...state, selection, suggestions: [], sessionToken }
    case actionTypes.SET_MANUAL:
      return { ...state, notFound: true, suggestions: [] }
    case actionTypes.CLEAR_STATE:
      return { ...state, selection: null, suggestions: [], notFound: false }
    case actionTypes.ERROR:
      return { ...state, selection: null, suggestions: [], error: true }
    default:
      throw new Error("Must dispatch a known action.")
  }
}

const defaultParams = {
  types: ["address"],
  fields: ["address_components", "formatted_address"],
}

export function useAutocomplete({
  types = defaultParams.types,
  fields = defaultParams.fields,
} = defaultParams) {
  const { loaded, error } = useAutocompleteKey()
  const autocompleteRef = useRef(null)
  const placesRef = useRef(null)
  const [state, dispatch] = useReducer(autocompleteReducer, initialState)

  function setInput(input) {
    dispatch({ type: actionTypes.UPDATE_INPUT, payload: input })
  }

  function getDetails(id, onSelect) {
    const request = {
      placeId: id,
      fields,
      sessionToken: state.sessionToken,
    }
    const newToken = new google.maps.places.AutocompleteSessionToken()

    function setSelection(place, status) {
      if (status === "OK") {
        dispatch({
          type: actionTypes.UPDATE_SELECTION,
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
      type: actionTypes.CLEAR_STATE,
    })
  }

  useEffect(() => {
    if (loaded) {
      const element = document.createElement("aside")
      const token = new google.maps.places.AutocompleteSessionToken()
      autocompleteRef.current = new google.maps.places.AutocompleteService()
      placesRef.current = new google.maps.places.PlacesService(element)
      dispatch({
        type: actionTypes.UPDATE_TOKEN,
        payload: token,
      })
    }
  }, [loaded])

  useEffect(() => {
    if (input.length > 3) {
      const request = {
        input,
        types,
        sessionToken: state.sessionToken,
      }

      function updateSuggestions(suggestions, status) {
        switch (status) {
          case "OK":
            return dispatch({
              type: actionTypes.UPDATE_SUGGESTIONS,
              payload: suggestions,
            })
          case "ZERO_RESULTS":
            return dispatch({ type: actionTypes.SET_MANUAL })
          default:
            dispatch({ type: actionTypes.ERROR, payload: status })
        }
      }

      autocompleteRef.current.getPlacePredictions(request, updateSuggestions)
    } else {
      dispatch({ type: actionTypes.UPDATE_SUGGESTIONS, payload: [] })
    }
  }, [input])
  return { ...state, getDetails, clearSelection }
}
