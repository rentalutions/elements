import { Container, Box } from "@rent_avail/core"
import { Tooltip, TooltipContent, TooltipTarget } from "../src"

export function BasicUsage() {
  return (
    <Container>
      <Tooltip id="thing">
        <TooltipTarget>
          <Box as="h5" style={{ textDecoration: "underline" }} color="blue_500">
            Hello World
          </Box>
        </TooltipTarget>
        <TooltipContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptatum
          nulla cupiditate, deserunt est placeat iure similique rem dolor
          adipisci molestiae quasi ipsum quisquam? Sed veritatis iusto ipsa
          quidem mollitia?
        </TooltipContent>
      </Tooltip>
    </Container>
  )
}
