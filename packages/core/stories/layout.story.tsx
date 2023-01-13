import React from "react"
import { Box, Container, Grid, Col, Card, Flex } from "../src/layout"

export function BoxUsage() {
  return <Box>Hello world</Box>
}

export function CardUsage() {
  return (
    <Card>
      <Box as="h3">Rent Collection</Box>
      <Box>This is an overview of your rent collection across units.</Box>
    </Card>
  )
}
