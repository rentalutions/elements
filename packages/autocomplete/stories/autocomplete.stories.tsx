import React, { useState } from "react"
import { Container, Box, Grid, Col } from "@rent_avail/core"
import { Dialog, DialogHeader, ConfirmationDialog } from "@rent_avail/dialog"
import { Button, Input } from "@rent_avail/controls"
import {
  Autocomplete as AutocompleteComponent,
  AutocompleteProvider,
} from "../src"

export default { title: "Packages/Autocomplete" }

export function AutocompleteManualOption() {
  const [response, setResponse] = useState(null)
  return (
    <AutocompleteProvider apiKey={process.env.PLACES_KEY}>
      <Container mt="4rem">
        <AutocompleteComponent
          label="Street Address"
          onSelect={(place) => setResponse(place)}
          onClear={() => setResponse(null)}
          onManualSelection={(submit, [isOpen, setOpen]) => {
            return (
              <Dialog open={isOpen} toggle={() => setOpen((o) => !o)}>
                <ConfirmationDialog style={{ zIndex: "99999" }}>
                  <DialogHeader title="Enter address manually" />
                  <Grid>
                    <Col as={Input} span={[9]} label="Street Address" />
                    <Col as={Input} span={[3]} label="No." />
                    <Col as={Input} span={[8]} label="City" />
                    <Col as={Input} span={[4]} label="State" />
                    <Col as={Input} span={[6]} label="Zip Code" />
                    <Col
                      as={Input}
                      span={[6]}
                      label="Country"
                      defaultValue="United States"
                    />
                    <Col
                      as={Button}
                      sx={{ justifySelf: "end" }}
                      variant="primary"
                      onClick={(e) =>
                        submit({
                          formatted_address:
                            "1234 North Augusta Boulevard, Chicago, IL, United States",
                        })
                      }
                    >
                      submit
                    </Col>
                  </Grid>
                </ConfirmationDialog>
              </Dialog>
            )
          }}
        />
        <Box sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptatum
          nulla cupiditate, deserunt est placeat iure similique rem dolor
          adipisci molestiae quasi ipsum quisquam? Sed veritatis iusto ipsa
          quidem mollitia?
        </Box>
        <Box as="pre" sx={{ my: 2, fontSize: "body" }}>
          <Box as="code">{JSON.stringify(response, null, 2)}</Box>
        </Box>
      </Container>
    </AutocompleteProvider>
  )
}

export function AutocompleteDefaultValue() {
  return (
    <AutocompleteProvider apiKey={process.env.PLACES_KEY}>
      <Container>
        <AutocompleteComponent
          label="Mailing Address"
          defaultValue="1003 North Sandburg Terrace, Chicago, IL, United States"
        />
      </Container>
    </AutocompleteProvider>
  )
}
