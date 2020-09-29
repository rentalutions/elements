import React, { useState, useRef } from "react"
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
  ...props
}) {
  const targetRef = useRef()
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
  function handleFocus() {
    if (selection) {
      setInput("")
      clearSelection(onClear)
    }
  }
  async function handleManualSelect(value) {
    await getDetails({ onSelect, manualSelection: value })
    setManualOpen(false)
  }
  return (
    <Box position="relative">
      <Input
        {...props}
        ref={targetRef}
        onChange={handleChange}
        onKeyDown={handleFocus}
        // onFocus={handleFocus}
        value={input}
        className={selection && "raised"}
      />
      {selection && (
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
            as="ul"
            sx={{
              bg: "ui_100",
              mb: "2rem",
              borderRadius: "0.25rem",
              width: targetRef.current.offsetWidth,
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "ui_500",
            }}
          >
            <GoogleLogo />
            {suggestions.map((place) => {
              return (
                <Box
                  className="suggestion"
                  key={place.place_id}
                  sx={{
                    p: "2rem",
                    cursor: "pointer",
                    "&:hover": { bg: "blue_100" },
                  }}
                  p="2rem"
                  onClick={() => handleSelect(place)}
                >
                  {place.description}
                </Box>
              )
            })}
            {suggestions < 5 && (
              <Box className="manual-add" sx={{ p: "2rem" }}>
                No results found.&nbsp;
                <Box
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
          </Box>
        </Popover>
      )}
      {manualOpen &&
        onManualSelection(handleManualSelect, [manualOpen, setManualOpen])}
    </Box>
  )
}