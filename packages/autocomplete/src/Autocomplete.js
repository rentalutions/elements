import React, { useState, useRef, useEffect } from "react"
import Input from "@rent_avail/input"
import { Box } from "@rent_avail/layout"
import { noop } from "@rent_avail/utils"
import Popover from "@rent_avail/popover"
import useAutocomplete from "./useAutocomplete"

function GoogleLogo() {
  return (
    <Box
      as="svg"
      viewBox="0 0 24 24"
      sx={{
        width: "1.5rem",
        height: "1.5rem",
        position: "absolute",
        top: "2.25rem",
        right: "2.25rem",
      }}
    >
      <path
        fill="currentColor"
        d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
      />
    </Box>
  )
}

export default function Autocomplete({
  onSelect = noop,
  onClear = noop,
  onManualSelection = noop,
  defaultValue = null,
  ...props
}) {
  const targetRef = useRef()
  const listRef = useRef()
  const [input, setInput] = useState("")
  const [manualOpen, setManualOpen] = useState(false)
  const {
    suggestions,
    getDetails,
    selection,
    clearSelection,
    called,
  } = useAutocomplete(input)
  function handleChange({ target }) {
    setInput(target.value)
  }
  function handleSelect(place) {
    setInput("")
    getDetails({ id: place.place_id, onSelect })
  }
  function handleKeyDown({ keyCode }) {
    if (selection) {
      setInput("")
      return clearSelection(onClear)
    }
    switch (keyCode) {
      // Tab Key
      case 9:
        listRef.current?.firstElementChild.focus()
        break
      default:
        break
    }
  }
  async function handleManualSelect(value) {
    await getDetails({ onSelect, manualSelection: value })
    setManualOpen(false)
  }
  useEffect(() => {
    if (defaultValue) {
      getDetails({ manualSelection: { formatted_address: defaultValue } })
    }
  }, [defaultValue])
  return (
    <Box position="relative">
      <Input
        {...props}
        ref={targetRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={input}
        className={selection && "raised"}
      />
      {!!selection && (
        <Box
          sx={{
            position: "absolute",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            pointerEvents: "none",
            maxWidth: "calc(100% - 4rem)",
            top: "3.25rem",
            left: "2rem",
            px: "0.5rem",
            py: "0.25rem",
            bg: "blue_100",
            borderRadius: "0.25rem",
          }}
        >
          {selection}
        </Box>
      )}
      {called && !selection && (
        <Popover targetRef={targetRef} position={{ x: "left", y: "bottom" }}>
          <Box
            ref={listRef}
            as="ul"
            sx={{
              mb: "2rem",
              bg: "ui_100",
              borderRadius: "0.25rem",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "ui_500",
              listStyle: "none",
              width: targetRef.current.offsetWidth,
            }}
          >
            {suggestions.map((place) => {
              return (
                <Box
                  as="li"
                  className="suggestion"
                  key={place.place_id}
                  tabIndex="0"
                  sx={{
                    p: "2rem",
                    cursor: "pointer",
                    outline: "none",
                    "&:hover, &:focus": { bg: "blue_100" },
                  }}
                  p="2rem"
                  onClick={() => handleSelect(place)}
                >
                  {place.description}
                </Box>
              )
            })}
            {suggestions.length < 5 && (
              <Box className="manual-add" sx={{ p: "2rem" }}>
                No results found.&nbsp;
                <Box
                  tabIndex="0"
                  as="span"
                  role="button"
                  className="link"
                  sx={{ fontWeight: "black", cursor: "pointer" }}
                  onClick={() => setManualOpen(true)}
                >
                  Enter an address manually.
                </Box>
              </Box>
            )}
            <GoogleLogo />
          </Box>
        </Popover>
      )}
      {manualOpen &&
        onManualSelection(handleManualSelect, [manualOpen, setManualOpen])}
    </Box>
  )
}
