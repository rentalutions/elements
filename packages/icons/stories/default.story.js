import * as icons from "../src"
import { Card, Flex, Box, Container } from "@rent_avail/core"

const iconsArray = []

for (let icon in icons) {
  iconsArray.push(icons[icon])
}

export function Icons() {
  return (
    <Container sx={{ pt: "2rem" }}>
      <Card as={Flex} sx={{ p: "2rem", my: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
        {iconsArray.map((icon) => (
          <Flex
            key={icon.displayName}
            title={icon.displayName}
            sx={{
              m: "1rem",
              p: "1rem",
              width: "10rem",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              bg: "ui_300",
              borderRadius: "4px",
              "&:hover": {
                bg: "ui_500",
              }
            }}
          >
            <Box as={icon} />
            <Box sx={{ text: "small", fontSize: "1rem", mt: "1rem" }}>{icon.displayName}</Box>
          </Flex>
        ))}
      </Card>
    </Container>
  )
}
