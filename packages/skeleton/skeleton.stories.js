import React, { useState, useEffect } from "react"
import Skeleton from "./src"
import { Heading, Text } from "@rent_avail/typography"
import { Container, Card, Stack, Box, Grid, Col } from "@rent_avail/layout"
import { Switch } from "@rent_avail/controls"
import Tag from "@rent_avail/tag"
import { ChevronRight } from "react-feather"

export default { title: "Packages/Skeleton" }

export function WrappingChildren() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const handleLoaded = () => setLoaded(true)
    setTimeout(handleLoaded, 4000)
    return () => clearTimeout(handleLoaded)
  })
  return (
    <Container mt="4rem">
      <Skeleton loaded={loaded}>
        <Heading>Hello World</Heading>
      </Skeleton>
      <Skeleton loaded={loaded}>
        <Text mt="2rem">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          nostrum rerum quibusdam natus magni consequuntur illum sapiente eos,
          possimus neque molestiae ratione omnis a eligendi illo, consectetur
          fugiat minima temporibus.
        </Text>
      </Skeleton>
      <Skeleton loaded={loaded}>
        <Text mt="4rem">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error omnis
          porro, veritatis blanditiis commodi odio optio veniam fugiat,
          excepturi harum velit possimus pariatur reprehenderit ad consequatur
          facilis laborum perferendis. Accusantium?
        </Text>
      </Skeleton>
      <Skeleton loaded={loaded}>
        <Card mt="4rem">
          <Heading as="h4">A very loadable card.</Heading>
          <Text mt="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            impedit minima in quasi tempore minus ullam ducimus odit deserunt
            architecto sunt commodi consequatur fugiat perspiciatis at et
            asperiores, reprehenderit expedita!
          </Text>
        </Card>
      </Skeleton>
    </Container>
  )
}

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
      <Heading>Payments</Heading>
      <Text mt="1rem">
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
      </Text>
      <Card mt="4rem" p="0">
        <Grid as="header" p="2rem">
          <Col span={[12, 6]}>
            <Heading as="h5">Lease Dates: Jan 01 2020 - Jan 31 2021</Heading>
            <Heading as="h5" mt="1rem">
              2024 N California Ave 3A
            </Heading>
            <Text mt="3rem">
              {" "}
              <Text as="span" fontWeight="black">
                Mailing Address
              </Text>{" "}
              900 N Franklin Chicago IL 60610
            </Text>
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
