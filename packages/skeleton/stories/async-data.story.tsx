import { useState, useEffect } from "react"
import Skeleton from "../src"
import { Container, Card, Stack, Box, Grid, Col } from "@rent_avail/core"
import Tag from "@rent_avail/tag"
import { ChevronRight } from "@rent_avail/icons"

export function PaymentList() {
  const [loaded, setLoaded] = useState(false)
  const [charges, setCharges] = useState([])
  useEffect(() => {
    function fetchCharges() {
      setLoaded(true)
      setCharges([
        {
          dueDate: "Jan 01 20",
          description: "Payment for January ",
          amount: 100000,
          status: "paid",
        },
        {
          dueDate: "Feb 01 20",
          description: "Payment for February",
          amount: 100000,
          status: "paid",
        },
        {
          dueDate: "Mar 01 20",
          description: "Payment for March",
          amount: 100000,
          status: "paid",
        },
        {
          dueDate: "Apr 01 20",
          description: "Payment for April",
          amount: 100000,
          status: "upcoming",
        },
      ])
    }
    setTimeout(fetchCharges, 4000)
  }, [])
  return (
    <Container mt="4rem">
      <Box>Payments</Box>
      <Box mt="1rem">
        You have{" "}
        <Box
          as="span"
          bg="blue_500"
          p="0.25rem 0.5rem"
          borderRadius="0.25rem"
          color="ui_100"
        >
          1
        </Box>{" "}
        payments upcoming.
      </Box>
      <Card mt="4rem" p="0">
        <Grid as="header" p="2rem">
          <Col span={[12, 6]}>
            <Box as="h5">Lease Dates: Jan 01 2020 - Jan 31 2021</Box>
            <Box as="h5" mt="1rem">
              2024 N California Ave 3A
            </Box>
            <Box mt="3rem">
              {" "}
              <Box as="span" fontWeight="black">
                Mailing Address
              </Box>{" "}
              900 N Franklin Chicago IL 60610
            </Box>
          </Col>
          <Col span={[12, 6]} css="text-align: right;">
            <Tag mr="1rem">AutoPay | OFF</Tag>
            <Tag>CreditBoost | OFF</Tag>
          </Col>
        </Grid>
        <Grid
          p="2rem"
          borderBottom="1px solid"
          borderBottomColor="ui_500"
          color="ui_500"
        >
          <Col span={[3]}>Due</Col>
          <Col span={[4]}>Description</Col>
          <Col span={[2]}>Status</Col>
          <Col span={[3]}>Amount</Col>
        </Grid>
        {loaded ? (
          charges.map(({ dueDate, description, status, amount }) => (
            <Grid p="2rem" borderBottom="1px solid" borderBottomColor="ui_500">
              <Col span={[3]}>{dueDate}</Col>
              <Col span={[4]}>{description}</Col>
              <Col span={[2]}>
                <Tag bg={status === "paid" ? "green_300" : "blue_100"}>
                  {status}
                </Tag>
              </Col>
              <Col span={[2]}>${amount / 100}</Col>
              <Col span={[1]} css="text-align:right;">
                <ChevronRight />
              </Col>
            </Grid>
          ))
        ) : (
          <Stack mt="2rem">
            <Skeleton height="4rem" mx="2rem" />
            <Skeleton height="4rem" mx="2rem" />
            <Skeleton height="4rem" mx="2rem" />
            <Skeleton height="4rem" mx="2rem" />
          </Stack>
        )}
      </Card>
    </Container>
  )
}
