import * as icons from "./src"
import { Box, Container } from "@rent_avail/layout"

export default { title: "Packages/Icons" }

const iconsArray = []

for (let icon in icons) {
  iconsArray.push(icons[icon])
}

export function Icons() {
  return (
    <Container sx={{ pt: "2rem" }}>
      {iconsArray.map((icon) => (
        <Box as={icon} sx={{ m: "1rem" }} />
      ))}
    </Container>
  )
}
