import { useState } from "react"
import { Box, Container, Card, Flex } from "@rent_avail/core"
import { Button } from "@rent_avail/controls"
import { Dialog, DialogTarget, ConfirmationDialog } from "@rent_avail/dialog"
import { motion } from "framer-motion"
import { InlineFeedback } from "../src"

export function InlineTransunion() {
  const [loaded, setLoaded] = useState(false)
  const reportProps = {
    bg: "blue_100",
    borderRadius: "0.25rem",
    display: "flex",
    alignItems: "center",
    p: "0.25rem",
  }
  const reportBoxProps = {
    as: "h3",
    flexBasis: "50%",
    bg: "ui_100",
    p: "2rem",
  }
  const reportLabelProps = {
    as: "h5",
    p: "2rem",
  }
  return (
    <Container mt="4rem">
      <Card>
        <Box
          as="header"
          borderBottom="1px solid"
          borderBottomColor="ui_500"
          mb="2rem"
          pb="2rem"
        >
          <Box>Application Details</Box>
        </Box>
        <InlineFeedback
          steps={[
            "Checking Data",
            "Compiling Reports",
            "Verifying Identity",
            "Fetching Score",
          ]}
          onAnimationEnd={() => setLoaded(true)}
        />
        <Box mt="2rem">Screening Reports</Box>
        {loaded && (
          <Box
            as={motion.section}
            initial={{ opacity: 0, y: "1rem" }}
            animate={{ opacity: 1, y: 0 }}
            display="grid"
            gridTemplateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
            mt="2rem"
            gridGap="2rem"
          >
            <Box {...reportProps}>
              <Box {...reportBoxProps}>720</Box>
              <Box {...reportLabelProps}>Credit Score</Box>
            </Box>
            <Box {...reportProps}>
              <Box {...reportBoxProps}>0</Box>
              <Box {...reportLabelProps}>Criminal Records</Box>
            </Box>
            <Box {...reportProps}>
              <Box {...reportBoxProps}>0</Box>
              <Box {...reportLabelProps}>Eviction Records</Box>
            </Box>
            <Box gridColumn="span 3" justifySelf="end">
              <Button variant="primary">submit reports</Button>
            </Box>
          </Box>
        )}
      </Card>
    </Container>
  )
}

export function InlinePublishListing() {
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  function handleToggle() {
    setOpen(false)
    setLoaded(false)
  }
  return (
    <Box
      display="grid"
      gridTemplateColumns="25rem auto"
      gridTemplateRows="15rem auto"
      minHeight="calc(100vh - 4rem)"
    >
      <Box gridRow="span 2" bg="blue_100" />
      <Box bg="blue_500" />
      <Box bg="ui_300">
        <Container mt="4rem">
          <Flex justifyContent="flex-end">
            <Dialog open={open} toggle={handleToggle} id="success-listing">
              <DialogTarget>
                <Button onClick={(e) => setOpen(true)}>Publish Listing</Button>
              </DialogTarget>
              <ConfirmationDialog>
                <InlineFeedback
                  steps={[
                    "Optimizing Photos",
                    "Connecting to Syndicates",
                    "Updating Feed",
                  ]}
                  onAnimationEnd={() => setLoaded(true)}
                />
                {loaded && (
                  <Box
                    as={motion.div}
                    initial={{ opacity: 0, y: "1rem" }}
                    animate={{ opacity: 1, y: 0 }}
                    mt="2rem"
                  >
                    <Box as="h3">Listing Published</Box>
                    <Box mt="2rem">
                      Successfully published to 12 sites, it can take up to 4
                      hours for your listing to appear on our partner sites.
                    </Box>
                  </Box>
                )}
              </ConfirmationDialog>
            </Dialog>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
