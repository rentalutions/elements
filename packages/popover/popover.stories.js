import React, { useState, useRef, useCallback, Fragment } from "react"
import Popover from "./src"
import { Container, Box } from "@rent_avail/layout"
import { Heading, Text } from "@rent_avail/typography"
import { Button } from "@rent_avail/controls"

export default { title: "Packages/Popover" }

const TagWithPopover = ({ title = "Hello Target" }) => {
  const targetRef = useRef(null)
  const timeoutRef = useRef(null)
  const [show, setShow] = useState(false)

  const openPopover = useCallback(
    (e) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setShow(true)
    },
    [timeoutRef]
  )

  const closePopover = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      if (show) setShow(false)
    }, 500)
  }, [show, timeoutRef])

  const cancelClosePopover = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [timeoutRef])

  return (
    <Fragment>
      <Box
        sx={{
          bg: "blue_500",
          color: "ui_100",
          borderRadius: "1rem",
          display: "inline-block",
          px: "1rem",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onMouseEnter={openPopover}
        onMouseLeave={closePopover}
        ref={targetRef}
      >
        {title}
      </Box>
      {show && (
        <Popover
          targetRef={targetRef}
          posititon={{ x: "default", y: "default" }}
        >
          <Box
            sx={{
              bg: "blue_100",
              p: "2rem",
              borderRadius: "4px",
              maxWidth: "276px",
              color: "blue_900",
            }}
            onMouseEnter={cancelClosePopover}
            onMouseLeave={closePopover}
          >
            <Heading as="h5">Popover Target Title</Heading>
            <Text my="1rem">
              Include copy and even a CTA to provide further interaction.
            </Text>
            <Button width="100%" variant="primary">
              Does Nothing
            </Button>
          </Box>
        </Popover>
      )}
    </Fragment>
  )
}

export function DefaultUsage() {
  return (
    <Container sx={{ my: "6rem" }}>
      <TagWithPopover title="Hello Target 1" />
      <Box sx={{ mt: "15rem" }} />
      <TagWithPopover title="Hello Target 2" />
      <Box sx={{ mt: "15rem" }} />
      <TagWithPopover title="Hello Target 3" />
      <Box sx={{ mt: "15rem" }} />
      <TagWithPopover title="Hello Target 4" />
      <Box sx={{ mt: "15rem" }} />
      <TagWithPopover title="Hello Target 5" />
    </Container>
  )
}
