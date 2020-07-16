import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useRef,
  Fragment,
} from "react"
import styled from "styled-components"
import Input from "@rent_avail/input"
import { Box } from "@rent_avail/layout"

const AutocompleteContext = createContext()

const scriptCache = []

function useScript(src) {
  const [state, setState] = useState({
    loaded: false,
    error: false,
  })
  useEffect(() => {
    function scriptLoaded() {
      setState({
        loaded: true,
        error: false,
      })
    }
    function scriptErrored() {
      setState({
        loaded: true,
        error: true,
      })
    }
    if (scriptCache.includes(src)) {
      scriptLoaded()
    } else {
      scriptCache.push(src)
      const script = document.createElement("script")
      script.src = src
      script.async = true
      script.addEventListener("load", scriptLoaded)
      script.addEventListener("error", scriptErrored)
      document.body.appendChild(script)
      return () => {
        script.removeEventListener("load", scriptLoaded)
        script.removeEventListener("error", scriptErrored)
      }
    }
  }, [src])
  return state
}

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

function useAutocomplete(input = "") {
  const { loaded, error } = useAutocompleteKey()
  const autocompleteRef = useRef(null)
  const [state, setPlaces] = useState({ places: [], error: false })
  function callback(places, status) {
    switch (status) {
      case "OK":
        return setPlaces({ places, error: false })

      default:
        throw new Error("Unknown error with places api.")
    }
  }
  useEffect(() => {
    const options = {
      input,
      types: ["address"],
    }
    if (!loaded || error) return
    autocompleteRef.current = new google.maps.places.AutocompleteService()
    if (input.length > 3) {
      autocompleteRef.current.getPlacePredictions(options, callback)
    }
  }, [input])
  return state
}

const PlacesList = styled(Box)`
  position: absolute;
`

export function Autocomplete(props) {
  const targetRef = useRef()
  const [input, setInput] = useState("")
  const { places, error } = useAutocomplete(input)
  function handleChange({ target }) {
    setInput(target.value)
  }
  return (
    <Box position="relative">
      <Input {...props} ref={targetRef} onChange={handleChange} value={input} />
      {places.length > 0 && (
        <Box
          as="ul"
          position="absolute"
          top="calc(100% + 1rem)"
          width="100%"
          bg="blue_100"
        >
          {places.map((place) => {
            // terms [street_number, street_name, city, state, country]
            return (
              <Box
                key={place.place_id}
                p="2rem"
                onClick={(e) => console.log(place)}
              >
                {place.description}
              </Box>
            )
          })}
        </Box>
      )}
    </Box>
  )
}
