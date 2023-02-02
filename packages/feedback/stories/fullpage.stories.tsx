import { useState } from "react"
import { Avatar } from "@rent_avail/avatar"
import { Box, Container, Card, Stack, Grid, Col, Flex } from "@rent_avail/core"
import { Button, Input } from "@rent_avail/controls"
import { Plus } from "@rent_avail/icons"
import { FullscreenFeedback } from "../src"

export function FullpagePayments() {
  const [open, setOpen] = useState(false)
  const [amount, setAmount] = useState("")
  return (
    <Container mt="4rem">
      <Stack>
        <Box as="h4">Schedule a payment</Box>
        <Grid>
          <Col span={["12", "6"]}>
            <Box as="h5">Balance Remaining</Box>
            <Box>$1,200</Box>
          </Col>
          <Col span={["12", "6"]}>
            <Box as="h5" textAlign="right">
              Due Date
            </Box>
            <Box textAlign="right">May 1, 2020</Box>
          </Col>
        </Grid>
        <Box as="h5" mt="2rem">
          1. Choose amount
        </Box>
        <Input
          label="Payment Amount"
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
        />
        <Box as="h5" mt="2rem">
          2. Choose date
        </Box>
        <Input type="date" label="Deposit Date" />
        <Box as="h5" mt="2rem">
          3. Choose account to pay from
        </Box>
        <Box
          p="2rem"
          bg="blue_100"
          css={`
            position: relative;
          `}
        >
          <Box mb="1rem" fontWeight="black">
            Janet's Checking Account
          </Box>
          <Box>Chase Account | 0124</Box>
          <Box
            fontWeight="black"
            css={`
              position: absolute;
              top: 2rem;
              right: 2rem;
              box-shadow: inset 0 -8px 0 ${({ theme }) => theme.colors.green_500};
            `}
          >
            Edit Payment Source
          </Box>
        </Box>
        <Box as="h5" mt="2rem">
          Payment Details
        </Box>
        <Grid>
          <Col span={[6]} as={Box}>
            Payment
          </Col>
          <Col span={[6]} as={Box} textAlign="right">
            ${amount || 0}
          </Col>
          <Col span={[6]} as={Box}>
            CreditBoost
          </Col>
          <Col span={[6]} as={Box} textAlign="right">
            $3.99
          </Col>
          <Col span={[6]} as={Box}>
            Total
          </Col>
          <Col span={[6]} as={Box} textAlign="right">
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
          <Box mb="2rem">Send for signing</Box>
          <Box>
            Once you send this lease for signing you'll be unable to edit it. To
            change anything you'll need to revoke access and re-send.
          </Box>
          <Box as="h5" mt="2rem">
            Lessees
          </Box>
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
          <Box fontFamily="legal">Chicago Residential Lease</Box>
          <Box fontFamily="legal">Created on Aug 7th 2019</Box>
          <Box as="h4" fontFamily="legal" mt="4rem">
            Premises
          </Box>
          <Box fontFamily="legal">2024 N California Ave Chicago IL, 60647</Box>
          <Box as="h4" fontFamily="legal" mt="4rem">
            Clauses
          </Box>
          <Stack mt="1rem">
            <Box fontFamily="legal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              quis laborum assumenda minus labore aperiam, explicabo dolor ea
              consequuntur qui totam, optio modi, suscipit magni aliquid tempore
              officiis possimus distinctio.
            </Box>
            <Box fontFamily="legal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              quis laborum assumenda minus labore aperiam, explicabo dolor ea
              consequuntur qui totam, optio modi, suscipit magni aliquid tempore
              officiis possimus distinctio.
            </Box>
            <Box fontFamily="legal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              quis laborum assumenda minus labore aperiam, explicabo dolor ea
              consequuntur qui totam, optio modi, suscipit magni aliquid tempore
              officiis possimus distinctio.
            </Box>
            <Box fontFamily="legal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              quis laborum assumenda minus labore aperiam, explicabo dolor ea
              consequuntur qui totam, optio modi, suscipit magni aliquid tempore
              officiis possimus distinctio.
            </Box>
            <Box fontFamily="legal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              quis laborum assumenda minus labore aperiam, explicabo dolor ea
              consequuntur qui totam, optio modi, suscipit magni aliquid tempore
              officiis possimus distinctio.
            </Box>
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
            <Box textAlign="center" as="h3">
              Lease Sent for Signing
            </Box>
            <Button mt="2rem" variant="primary" onClick={(e) => setOpen(false)}>
              Got It
            </Button>
          </Flex>
        }
      />
    </Container>
  )
}
