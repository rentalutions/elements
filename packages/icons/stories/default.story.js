import * as icons from "../src"
import { Flex, Box, Container, baseTheme } from "@rent_avail/core"

const iconsArray = []

for (let icon in icons) {
  iconsArray.push(icons[icon])
}

export function Icons() {
  return (
    <Container as={Flex} sx={{ p: "2rem", my: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
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
            bg: "ui_100",
            borderRadius: "4px",
            boxShadow: `0px 1px 5px ${baseTheme.colors.ui_500}`,
            "&:hover": {
              boxShadow: `0px 1px 5px ${baseTheme.colors.ui_700}`,
            }
          }}
        >
          <Box as={icon} />
          <Box sx={{ text: "small", fontSize: "1rem", mt: "1rem" }}>{icon.displayName}</Box>
        </Flex>
      ))}
    </Container>
  )
}
