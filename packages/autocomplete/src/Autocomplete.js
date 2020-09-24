import React, { useState, useRef } from "react"
import styled from "styled-components"
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
        width: "2rem",
        height: "2rem",
        position: "absolute",
        top: "2rem",
        right: "2rem",
      }}
    >
      <path
        fill="currentColor"
        d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
      />
    </Box>
  )
}

const ManualLink = styled.a`
  font-weight: ${({ theme }) => theme.fontWeights.black};
`

export default function Autocomplete({
  onSelect = noop,
  onClear = noop,
  ...props
}) {
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
      {suggestions.length > 0 && (
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
          </Box>
        </Popover>
      )}
      {notFound && (
        <Box
          sx={{
            position: "absolute",
            top: "calc(100% + 1rem)",
            bg: "ui_100",
            width: "100%",
            p: "2rem",
          }}
        >
          No results found. <ManualLink>Enter an address manually</ManualLink>
        </Box>
      )}
    </Box>
  )
}
