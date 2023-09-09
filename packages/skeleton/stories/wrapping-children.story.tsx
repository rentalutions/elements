import { useState, useEffect } from "react"
import { Container, Card, Box } from "@rent_avail/core"
import Skeleton from "../src"

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
        <Box>Hello World</Box>
      </Skeleton>
      <Skeleton loaded={loaded}>
        <Box mt="2rem">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          nostrum rerum quibusdam natus magni consequuntur illum sapiente eos,
          possimus neque molestiae ratione omnis a eligendi illo, consectetur
          fugiat minima temporibus.
        </Box>
      </Skeleton>
      <Skeleton loaded={loaded}>
        <Box mt="4rem">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error omnis
          porro, veritatis blanditiis commodi odio optio veniam fugiat,
          excepturi harum velit possimus pariatur reprehenderit ad consequatur
          facilis laborum perferendis. Accusantium?
        </Box>
      </Skeleton>
      <Skeleton loaded={loaded}>
        <Card mt="4rem">
          <Box as="h4">A very loadable card.</Box>
          <Box mt="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            impedit minima in quasi tempore minus ullam ducimus odit deserunt
            architecto sunt commodi consequatur fugiat perspiciatis at et
            asperiores, reprehenderit expedita!
          </Box>
        </Card>
      </Skeleton>
    </Container>
  )
}
