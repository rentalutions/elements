import {
  useRef,
  useReducer,
  useLayoutEffect,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react"
import { noop } from "@rent_avail/utils"
import { useScript } from "./use-script"

const AddressContext = createContext<{ loaded: boolean; error: boolean }>(null)

enum AutocompleteActionType {
  addToken = "ADD_TOKEN",
  updateQuery = "UPDATE_QUERY",
  updateSuggestions = "UPDATE_SUGGESTIONS",
  updateSelection = "UPDATE_SELECTION",
  clear = "CLEAR",
  noMatchesFound = "NO_MATCHES",
}

type AddressError = any

interface AutocompleteState {
  selection: google.maps.places.PlaceResult | null
  suggestions: google.maps.places.AutocompletePrediction[]
  sessionToken: google.maps.places.AutocompleteSessionToken | null
  error: AddressError | null
  notFound: boolean
  query: string
}

interface AutocompleteAction {
  type: AutocompleteActionType
  payload?: any
}

export function PlacesProvider({ apiKey, ...props }) {
  if (!apiKey) throw Error("Must pass an api key to the address provider.")
  const { loaded, error } = useScript(
    `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
  )
  return <AddressContext.Provider value={{ loaded, error }} {...props} />
}

function addressReducer(state: AutocompleteState, action: AutocompleteAction) {
  switch (action.type) {
    case AutocompleteActionType.addToken:
      return { ...state, sessionToken: action.payload }
    case AutocompleteActionType.updateQuery:
      return { ...state, query: action.payload }
    case AutocompleteActionType.updateSelection:
      return { ...state, suggestions: action.payload, notFound: false }
    case AutocompleteActionType.noMatchesFound:
      return { ...state, suggestions: [], notFound: true }
    case AutocompleteActionType.updateSelection:
      return {
        ...state,
        suggestions: [],
        selection: action.payload.selection,
        sessionToken: action.payload.sessionToken,
      }
    case AutocompleteActionType.clear:
      return {
        ...state,
        selection: null,
        notFound: false,
        suggestions: [],
      }
    default:
      throw Error("Unknown action type: " + action.type)
  }
}

const initialState = {
  selection: null,
  suggestions: [],
  sessionToken: null,
  error: false,
  called: false,
  notFound: false,
  query: "",
}

interface PlaceConfig {
  /**
   * Number of characters to ignore before suggesting place predictions.
   */
  offset?: number
  /**
   * Restrict suggestions to specific [types](https://developers.google.com/maps/documentation/places/web-service/supported_types#table1).
   */
  types?: string[]
  /**
   * Restrict returned [address components](https://developers.google.com/maps/documentation/places/web-service/details#fields).
   */
  fields?: string[]
}

export function usePlaceAutocomplete({
  offset = 3,
  types = ["address"],
  fields = ["address_components", "formatted_address"],
}: PlaceConfig = {}) {
  const { loaded, error } = useContext(AddressContext)
  const [state, dispatch] = useReducer(addressReducer, initialState)
  const autocompleteService =
    useRef<google.maps.places.AutocompleteService | null>(null)
  const detailsService = useRef<google.maps.places.PlacesService | null>(null)
  const setQuery = useCallback(
    (query: string) =>
      dispatch({ type: AutocompleteActionType.updateQuery, payload: query }),
    []
  )
  const getDetails = useCallback((placeId, onSelect = noop) => {
    const request = {
      placeId,
      fields,
      sessionToken: state.sessionToken,
    }
    detailsService.current.getDetails(request, (place, status) => {
      if (status === "OK") {
        const sessionToken = new google.maps.places.AutocompleteSessionToken()
        console.log(place)
        dispatch({
          type: AutocompleteActionType.updateSelection,
          payload: { selection: place, sessionToken },
        })
        onSelect(place, status)
      } else {
        console.log(status)
      }
    })
  }, [])
  const clear = useCallback(() => {
    dispatch({ type: AutocompleteActionType.clear })
  }, [])

  useLayoutEffect(() => {
    if (loaded && !error) {
      autocompleteService.current = new google.maps.places.AutocompleteService()
      detailsService.current = new google.maps.places.PlacesService(
        document.createElement("div")
      )
      const token = new google.maps.places.AutocompleteSessionToken()
      dispatch({ type: AutocompleteActionType.addToken, payload: token })
    }
  }, [loaded])
  useEffect(() => {
    if (state.query.length > offset) {
      const request = {
        input: state.query,
        types,
        sessionToken: state.sessionToken,
      }
      autocompleteService.current.getPlacePredictions(
        request,
        (suggestions, status) => {
          if (status === "OK") {
            dispatch({
              type: AutocompleteActionType.updateSelection,
              payload: suggestions,
            })
          }
          if (status === "ZERO_RESULTS") {
            dispatch({
              type: AutocompleteActionType.noMatchesFound,
            })
          }
        }
      )
    }
  }, [state.query])
  return { ...state, setQuery, getDetails, clear }
}

// function autocompleteReducer(state, action) {
//   const {
//     payload: {
//       query = "",
//       selection = null,
//       sessionToken = null,
//       suggestions = [],
//       called,
//     } = {},
//   } = action
//   switch (action.type) {
//     case "ADD_TOKEN":
//       return { ...state, sessionToken }
//     case "SET_QUERY":
//       return { ...state, query }
//     case "UPDATE_SUGGESTIONS":
//       return { ...state, suggestions, called }
//     case "SELECT_PLACE":
//       return { ...state, selection, suggestions: [], sessionToken, query: "" }
//     case "MANUAL_SELECT_PLACE":
//       return { ...state, selection, suggestions: [], query: "" }
//     case "ZERO_RESULTS":
//       return { ...state, called: true, suggestions: [] }
//     case "CLEAR_SELECTION":
//       return {
//         ...state,
//         selection: null,
//         suggestions: [],
//         called: false,
//         query: "",
//       }
//     case "ERROR":
//       return {
//         ...state,
//         selection: null,
//         suggestions: [],
//         error: true,
//         called: true,
//       }
//     default:
//       throw new Error("Must dispatch a known action.")
//   }
// }

// export default function useAutocomplete(input = "") {
//   const { loaded, error } = useAutocompleteKey()
//   const autocompleteRef = useRef(null)
//   const placesRef = useRef(null)
//   const [state, dispatch] = useReducer(autocompleteReducer, initialState)

//   async function getDetails({ id, onSelect = noop, manualSelection }) {
//     if (manualSelection) {
//       dispatch({
//         type: "MANUAL_SELECT_PLACE",
//         payload: {
//           selection: manualSelection.formatted_address,
//         },
//       })
//       onSelect(manualSelection)
//     } else {
//       const request = {
//         placeId: id,
//         fields: ["address_components", "formatted_address"],
//         sessionToken: state.sessionToken,
//       }
//       // eslint-disable-next-line no-undef
//       const newToken = new google.maps.places.AutocompleteSessionToken()
//       placesRef.current.getDetails(request, (place, status) => {
//         if (status === "OK") {
//           dispatch({
//             type: "SELECT_PLACE",
//             payload: {
//               selection: place.formatted_address,
//               sessionToken: newToken,
//             },
//           })
//           onSelect(place)
//         } else {
//           dispatch({
//             type: "ERROR",
//           })
//         }
//       })
//     }
//   }

//   function setQuery(q) {
//     dispatch({ type: "SET_QUERY", payload: { query: q } })
//   }

//   function clearSelection(onClear) {
//     onClear()
//     dispatch({
//       type: "CLEAR_SELECTION",
//     })
//   }

//   useEffect(() => {
//     // Instantiate services for later and create a session token.
//     if (loaded && !error) {
//       // eslint-disable-next-line no-undef
//       autocompleteRef.current = new google.maps.places.AutocompleteService()
//       // eslint-disable-next-line no-undef
//       placesRef.current = new google.maps.places.PlacesService(
//         document.createElement("div")
//       )
//       dispatch({
//         type: "ADD_TOKEN",
//         payload: {
//           // eslint-disable-next-line no-undef
//           sessionToken: new google.maps.places.AutocompleteSessionToken(),
//         },
//       })
//     }
//   }, [loaded])

//   function updateSuggestions(suggestions, status) {
//     switch (status) {
//       case "OK":
//         return dispatch({
//           type: "UPDATE_SUGGESTIONS",
//           payload: { suggestions, called: true },
//         })
//       case "ZERO_RESULTS":
//         return dispatch({
//           type: "UPDATE_SUGGESTIONS",
//           payload: { suggestions: [], called: true },
//         })
//       default:
//         dispatch({ type: "ERROR", payload: { status } })
//     }
//   }

//   useEffect(() => {
//     // Get autocomplete suggestions based on input
//     if (state.query.length > 0) {
//       const request = {
//         input: state.query,
//         types: ["address"],
//         sessionToken: state.sessionToken,
//       }

//       autocompleteRef.current.getPlacePredictions(request, updateSuggestions)
//     } else {
//       dispatch({
//         type: "UPDATE_SUGGESTIONS",
//         payload: { suggestions: [], called: false },
//       })
//     }
//   }, [state.query])

//   return { ...state, setQuery, getDetails, clearSelection }
// }
