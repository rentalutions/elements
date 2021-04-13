import { useState } from "react"
import { Box, Container, Grid, Col } from "@rent_avail/core"
import { Input, Button, Checkbox, Radio } from "./src"

export default { title: "Packages/Controls" }

declare namespace Object {
  function fromEntries([]): object
}

export function UncontrolledInputs() {
  const [loading, setLoading] = useState(true)
  return (
    <Container sx={{ mt: "4rem" }}>
      <Grid
        as="form"
        onSubmit={(e: any) => {
          e.preventDefault()
          const formData = Object.fromEntries(new FormData(e.target))
          console.log(formData)
        }}
      >
        <Col span={[12, 6]} as={Input} label="Email" name="email" />
        <Col
          span={[12, 6]}
          as={Input}
          name="new-password"
          type="password"
          label="Password"
          help="Must contain at least 8 characters and at least 1 number."
        />
        <Col>
          <Radio name="contact-preference" value="phone" />
          <Radio name="contact-preference" value="text" />
          <Radio name="contact-preference" value="email" />
        </Col>
        <Col>
          <Checkbox name="terms-agreement" label="Agree to terms of service." />
        </Col>
        <Col
          sx={{ display: "flex", flexDirection: "row-reverse", gap: "2rem" }}
        >
          <Button variant="primary">Main Action</Button>
          <Button loading={loading} onClick={(e) => setLoading((l) => !l)}>
            Secondary Action
          </Button>
          <Button variant="subtle" as="a">
            Tertiary Action
          </Button>
        </Col>
      </Grid>
    </Container>
  )
}
