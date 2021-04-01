import { Box, Container, Grid, Col } from "@rent_avail/core"
import { Input, Button } from "./src"

export default { title: "Packages/Controls" }

export function UncontrolledInputs() {
  return (
    <Container sx={{ mt: "4rem" }}>
      <Grid
        as="form"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Col span={[12, 6]} as={Input} label="Email" />
        <Col
          span={[12, 6]}
          as={Input}
          type="password"
          label="Password"
          help="Must contain at least 8 characters and at least 1 number."
        />
        <Col
          sx={{ display: "flex", flexDirection: "row-reverse", gap: "2rem" }}
        >
          <Button variant="primary">Main Action</Button>
          <Button loading>Secondary Action</Button>
          <Button variant="subtle">Tertiary Action</Button>
        </Col>
      </Grid>
    </Container>
  )
}
