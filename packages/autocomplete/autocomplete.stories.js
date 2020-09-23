import React, { useState } from "react"
import { Container, Box } from "@rent_avail/layout"
import { Autocomplete, AutocompleteProvider } from "./src"

export default { title: "Autocomplete" }

export function Component() {
  const [response, setResponse] = useState(null)
  return (
    <AutocompleteProvider apiKey={process.env.PLACES_KEY}>
      <Container mt="4rem">
        <Autocomplete
          label="Street Address"
          onSelect={(place) => setResponse(place)}
          onClear={() => setResponse(null)}
        />
        <Box mt="2rem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptatum
          nulla cupiditate, deserunt est placeat iure similique rem dolor
          adipisci molestiae quasi ipsum quisquam? Sed veritatis iusto ipsa
          quidem mollitia?
        </Box>
        <Box as="pre" my="2rem" fontSize="1.25rem">
          <Box as="code">{JSON.stringify(response, null, 2)}</Box>
        </Box>
      </Container>
    </AutocompleteProvider>
  )
}
