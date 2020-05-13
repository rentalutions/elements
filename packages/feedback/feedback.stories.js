import React, { useState } from "react"
import { FullpageFeedback, InlineFeedback } from "./src"
import { Box, Container, Card } from "@rent_avail/layout"
import { Heading, Text } from "@rent_avail/typography"
import { Button } from "@rent_avail/controls"
import { motion } from "framer-motion"

export default { title: "Feedback" }

export function FullpageUsage() {
  return (
    <FullpageFeedback
      open={true}
      duration={2000}
      steps={[
        "Getting your info",
        "Printing your check",
        "Licking the envelope",
      ]}
      successMessage="Payment Scheduled"
      onAnimationEnd={() => console.log("thing")}
    />
  )
}

export function InlineVerification() {
  const [loaded, setLoaded] = useState(false)
  return (
    <Container>
      <InlineFeedback
        steps={[
          "Verifying Phone",
          "Generating Device Data",
          "Securing Account",
        ]}
        onAnimationEnd={() => setLoaded(true)}
      />
      {loaded && (
        <Box
          as={motion.section}
          mt="2rem"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Heading as="h3" mb="2rem">
            Great, your account is secured.
          </Heading>
          <Text>
            The next time you log in from a new device, you'll recive an
            authentication code for this number to keep your account secure.
          </Text>
          <Box my="2rem" p="2rem" bg="blue_100" borderRadius="0.25rem">
            <Text fontWeight="bold">Recovery Code</Text>
            <Heading my="2rem">1230-0129391-019291-AC</Heading>
            <Text>
              This is a one-time code that you can use to recover your account
              if you get locked out. Keep this code in a safe, secure place. Do
              not store it publicly.
            </Text>
          </Box>
          <Box display="flex" justifyContent="flex-end" mt="2rem">
            <Button variant="primary">Continue</Button>
          </Box>
        </Box>
      )}
    </Container>
  )
}

export function InlineTransunion() {
  const [loaded, setLoaded] = useState(false)
  const reportProps = {
    bg: "blue_100",
    borderRadius: "0.25rem",
    display: "flex",
    alignItems: "center",
    p: "0.25rem",
  }
  const reportHeadingProps = {
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
    <Container>
      <Card>
        <Box
          as="header"
          borderBottom="1px solid"
          borderBottomColor="ui_500"
          mb="2rem"
          pb="2rem"
        >
          <Text>Application Details</Text>
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
        <Heading mt="2rem">Screening Reports</Heading>
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
              <Heading {...reportHeadingProps}>720</Heading>
              <Heading {...reportLabelProps}>Credit Score</Heading>
            </Box>
            <Box {...reportProps}>
              <Heading {...reportHeadingProps}>0</Heading>
              <Heading {...reportLabelProps}>Criminal Records</Heading>
            </Box>
            <Box {...reportProps}>
              <Heading {...reportHeadingProps}>0</Heading>
              <Heading {...reportLabelProps}>Eviction Records</Heading>
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
