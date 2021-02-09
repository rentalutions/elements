import React, { useState, Fragment } from "react"
import { FullscreenFeedback, InlineFeedback } from "./src"
import { Avatar } from "@rent_avail/avatar"
import {
  Box,
  Container,
  Card,
  Stack,
  Grid,
  Col,
  Flex,
} from "@rent_avail/layout"
import { Heading, Text } from "@rent_avail/typography"
import { Button } from "@rent_avail/controls"
import Input from "@rent_avail/input"
import { Dialog, DialogTarget, ConfirmationDialog } from "@rent_avail/dialog"
import { motion } from "framer-motion"
import { Plus } from "react-feather"

export default { title: "Packages/Feedback" }

export function FullpagePayments() {
  const [open, setOpen] = useState(false)
  const [amount, setAmount] = useState("")
  return (
    <Container mt="4rem">
      <Stack>
        <Heading as="h4">Schedule a payment</Heading>
        <Grid>
          <Col span={["12", "6"]}>
            <Heading as="h5">Balance Remaining</Heading>
            <Heading>$1,200</Heading>
          </Col>
          <Col span={["12", "6"]}>
            <Heading as="h5" textAlign="right">
              Due Date
            </Heading>
            <Heading textAlign="right">May 1, 2020</Heading>
          </Col>
        </Grid>
        <Heading as="h5" mt="2rem">
          1. Choose amount
        </Heading>
        <Input
          label="Payment Amount"
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
        />
        <Heading as="h5" mt="2rem">
          2. Choose date
        </Heading>
        <Input type="date" label="Deposit Date" />
        <Heading as="h5" mt="2rem">
          3. Choose account to pay from
        </Heading>
        <Box
          p="2rem"
          bg="blue_100"
          css={`
            position: relative;
          `}
        >
          <Text mb="1rem" fontWeight="black">
            Janet's Checking Account
          </Text>
          <Text>Chase Account | 0124</Text>
          <Text
            fontWeight="black"
            css={`
              position: absolute;
              top: 2rem;
              right: 2rem;
              box-shadow: inset 0 -8px 0 ${({ theme }) => theme.colors.green_500};
            `}
          >
            Edit Payment Source
          </Text>
        </Box>
        <Heading as="h5" mt="2rem">
          Payment Details
        </Heading>
        <Grid>
          <Col span={[6]} as={Text}>
            Payment
          </Col>
          <Col span={[6]} as={Text} textAlign="right">
            ${amount || 0}
          </Col>
          <Col span={[6]} as={Text}>
            CreditBoost
          </Col>
          <Col span={[6]} as={Text} textAlign="right">
            $3.99
          </Col>
          <Col span={[6]} as={Text}>
            Total
          </Col>
          <Col span={[6]} as={Text} textAlign="right">
            ${Number(amount) + 3.99}
          </Col>
        </Grid>
        <Flex justifyContent="flex-end">
          <Button variant="primary" onClick={(e) => setOpen(true)}>
            schedule payment
          </Button>
        </Flex>
        <FullscreenFeedback
          open={open}
          steps={[
            "Getting your info",
            "Printing your check",
            "Licking the envelope",
          ]}
          successMessage="Payment Scheduled"
          // onAnimationEnd={() => setTimeout(() => setOpen(false), 1000)}
        />
      </Stack>
    </Container>
  )
}

export function FullpageSendLease() {
  const [open, setOpen] = useState(false)
  return (
    <Container mt="4rem">
      <Stack>
        <Card>
          <Heading mb="2rem">Send for signing</Heading>
          <Text>
            Once you send this lease for signing you'll be unable to edit it. To
            change anything you'll need to revoke access and re-send.
          </Text>
          <Heading as="h5" mt="2rem">
            Lessees
          </Heading>
          <Stack direction={["row"]} flexWrap="wrap">
            <Avatar
              mt="2rem"
              name="Janet Wood"
              photoUrl="https://source.unsplash.com/collection/802865/48x48"
            />
            <Avatar
              mt="2rem"
              name="Chrissy Snow"
              photoUrl="https://source.unsplash.com/collection/802865/48x48"
            />
            <Avatar
              mt="2rem"
              name="Patrick Krawczykowski"
              photoUrl="https://source.unsplash.com/collection/802865/48x48"
            />
            <Box
              width="4rem"
              height="4rem"
              borderRadius="50%"
              bg="ui_300"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt="2rem"
            >
              <Plus />
            </Box>
          </Stack>
          <Flex justifyContent="flex-end">
            <Button mt="2rem" onClick={(e) => setOpen(true)}>
              Send for signing
            </Button>
          </Flex>
        </Card>
        <Box
          py={["6rem", "12rem", null]}
          px={["2rem", "4rem", "8rem"]}
          bg="ui_100"
        >
          <Heading fontFamily="legal">Chicago Residential Lease</Heading>
          <Text fontFamily="legal">Created on Aug 7th 2019</Text>
          <Heading as="h4" fontFamily="legal" mt="4rem">
            Premises
          </Heading>
          <Text fontFamily="legal">
            2024 N California Ave Chicago IL, 60647
          </Text>
          <Heading as="h4" fontFamily="legal" mt="4rem">
            Clauses
          </Heading>
          <Stack mt="1rem">
            <Text fontFamily="legal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              quis laborum assumenda minus labore aperiam, explicabo dolor ea
              consequuntur qui totam, optio modi, suscipit magni aliquid tempore
              officiis possimus distinctio.
            </Text>
            <Text fontFamily="legal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              quis laborum assumenda minus labore aperiam, explicabo dolor ea
              consequuntur qui totam, optio modi, suscipit magni aliquid tempore
              officiis possimus distinctio.
            </Text>
            <Text fontFamily="legal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              quis laborum assumenda minus labore aperiam, explicabo dolor ea
              consequuntur qui totam, optio modi, suscipit magni aliquid tempore
              officiis possimus distinctio.
            </Text>
            <Text fontFamily="legal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              quis laborum assumenda minus labore aperiam, explicabo dolor ea
              consequuntur qui totam, optio modi, suscipit magni aliquid tempore
              officiis possimus distinctio.
            </Text>
            <Text fontFamily="legal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              quis laborum assumenda minus labore aperiam, explicabo dolor ea
              consequuntur qui totam, optio modi, suscipit magni aliquid tempore
              officiis possimus distinctio.
            </Text>
          </Stack>
        </Box>
      </Stack>
      <FullscreenFeedback
        open={open}
        steps={[
          "Checking clauses against local laws",
          "Verifying contact info",
          "Sending document",
        ]}
        success={
          <Flex flexDirection="column" alignItems="center">
            <Heading textAlign="center" as="h3">
              Lease Sent for Signing
            </Heading>
            <Button mt="2rem" variant="primary" onClick={(e) => setOpen(false)}>
              Got It
            </Button>
          </Flex>
        }
      />
    </Container>
  )
}

export function InlineVerification() {
  const [loaded, setLoaded] = useState(false)
  return (
    <Container
      as={Grid}
      minHeight="calc(100vh - 8rem)"
      mt="4rem"
      display="grid"
      alignItems="center"
    >
      <Col minHeight="32rem" span={[12, 10]} offset={["auto", 2]}>
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
            <Text>You're all set to start using your Avail account.</Text>
            <Box my="2rem" p="2rem" bg="blue_100" borderRadius="0.25rem">
              <Text fontWeight="bold">Account Security</Text>
              <Text>
                The next time you log in from a new device, you'll recive an
                authentication code for this number to keep your account secure.
              </Text>
            </Box>
            <Box display="flex" justifyContent="flex-end" mt="2rem">
              <Button variant="primary">Continue</Button>
            </Box>
          </Box>
        )}
      </Col>
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
    <Container mt="4rem">
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
                    <Heading as="h3">Listing Published</Heading>
                    <Text mt="2rem">
                      Successfully published to 12 sites, it can take up to 4
                      hours for your listing to appear on our partner sites.
                    </Text>
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
