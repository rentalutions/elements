import React from "react"
import { Autocomplete, AutocompleteProvider } from "./src"
import { Container, Box } from "@rent_avail/layout"

export default { title: "Autocomplete" }

export function Component() {
  return (
    <AutocompleteProvider apiKey={process.env.PLACES_KEY}>
      <Container mt="4rem">
        <Autocomplete
          label="Street Address"
          onSelect={(place) => console.log(place)}
        />
        <Box mt="2rem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptatum
          nulla cupiditate, deserunt est placeat iure similique rem dolor
          adipisci molestiae quasi ipsum quisquam? Sed veritatis iusto ipsa
          quidem mollitia?
        </Box>
      </Container>
    </AutocompleteProvider>
  )
}
