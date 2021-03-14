import { Box, Container, Grid, Col } from "./src/layout"

export default { title: "Components/Core" }

export function BoxUsage() {
  return <Box>Hello world</Box>
}

const columnStyles = {}

export function GridUsage() {
  return (
    <Container>
      <Grid>
        <Col sx={{ mt: "2rem" }}>Thosmeka</Col>
      </Grid>
    </Container>
  )
}
