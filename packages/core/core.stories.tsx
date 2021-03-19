import { Box, Container, Grid, Col, Card, Flex } from "./src/layout"

export default { title: "Components/Core" }

export function BoxUsage() {
  return <Box>Hello world</Box>
}

const columnStyles = {}

export function GridUsage() {
  return (
    <Container>
      <Grid sx={{ mt: "4rem" }}>
        <Col span={[12, 6]} sx={{ mt: "2rem", px: "2rem" }}>
          Thosmeka
        </Col>
      </Grid>
    </Container>
  )
}

export function CardUsage() {
  return <Card sx={{ mt: "4rem", mx: "2rem", bg: "blue_100" }}>Hello Card</Card>
}

export function FlexUsage() {
  return <Flex sx={{ display: "block" }}>Hasdlkfj</Flex>
}
