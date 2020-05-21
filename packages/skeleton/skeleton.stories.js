import React, { useState, useEffect } from "react"
import Skeleton from "./src"
import { Container, Card } from "@rent_avail/layout"
import { Heading, Text } from "@rent_avail/typography"

export default { title: "Skeleton" }

export function BasicUsage() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const handleLoaded = () => setLoaded(true)
    setTimeout(handleLoaded, 2000)
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
