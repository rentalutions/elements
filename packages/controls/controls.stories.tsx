import { Box, Container, Grid, Col } from "@rent_avail/core"
import { Input } from "./src"

export default { title: "Packages/Controls" }

export function UncontrolledInputs() {
  return (
    <Container sx={{ mt: "4rem" }}>
      <Grid as="form">
        <Col span={[12, 6]} as={Input} label="Email" />
        <Col
          span={[12, 6]}
          as={Input}
          label="Password"
          help="Must contain at least 8 characters and at least 1 number."
        />
      </Grid>
    </Container>
  )
}
