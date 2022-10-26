import React, { useState, useRef, useCallback, Fragment } from "react"
import Popover from "./src"
import { Container, Box, Flex } from "@rent_avail/core"
import { Heading, Text } from "@rent_avail/typography"
import { Button } from "@rent_avail/controls"

export default { title: "Packages/Popover" }

export function PopoverExample({ position }) {
  const targetRef = useRef(null)
  return (
    <Container sx={{ my: 4 }}>
      <Button ref={targetRef}>Button</Button>
      <Popover targetRef={targetRef} position={position}>
        <Box sx={{ p: 2, bg: "blue_100" }}>
          <Heading as="h3" mb="1rem">
            Popover
          </Heading>
        </Box>
      </Popover>
    </Container>
  )
}

export function PopoverExample2() {
  return (
    <>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
          bg: "ui_300",
          padding: "5rem",
        }}
      >
        <Flex
          sx={{
            flexWrap: "wrap",
            height: "100%",
            width: "100%",
            border: (theme) => `solid 5px ${theme.colors.ui_500}`,
            bg: "white",
            overflowY: "scroll",
          }}
        >
          <Box as="div" sx={{ width: "50%" }}>
            <PopoverExample />
          </Box>
          <Box as="div" sx={{ marginLeft: "auto" }}>
            <PopoverExample />
          </Box>
          <Box as="div" sx={{ width: "50%", marginTop: "auto" }}>
            <PopoverExample />
          </Box>
          <Box as="div" sx={{ marginLeft: "auto", marginTop: "auto" }}>
            <PopoverExample />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export function PopoverExample3() {
  return (
    <>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
          bg: "ui_300",
          padding: "10rem",
        }}
      >
        <Flex
          sx={{
            flexWrap: "wrap",
            height: "100%",
            width: "100%",
            border: (theme) => `solid 5px ${theme.colors.ui_500}`,
            bg: "white",
            overflowY: "scroll",
          }}
        >
          <Box as="div" sx={{ width: "50%" }}>
            <PopoverExample position={{ x: "right", y: "top" }} />
          </Box>
          <Box as="div" sx={{ marginLeft: "auto" }}>
            <PopoverExample position={{ x: "left", y: "top" }} />
          </Box>
          <Box as="div" sx={{ width: "50%", marginTop: "auto" }}>
            <PopoverExample position={{ x: "right", y: "bottom" }} />
          </Box>
          <Box as="div" sx={{ marginLeft: "auto", marginTop: "auto" }}>
            <PopoverExample position={{ x: "left", y: "bottom" }} />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export function PopoverExample4() {
  const targetRef1 = useRef(null)
  const targetRef2 = useRef(null)
  return (
    <Flex>
      <Container sx={{ width: "50%" }}>
        <Button ref={targetRef1}>Button</Button>
        <Popover targetRef={targetRef1} paddingY={50}>
          <Box sx={{ p: 2, bg: "blue_100" }}>
            <Heading as="h3" mb="1rem">
              Popover
            </Heading>
          </Box>
        </Popover>
      </Container>
      <Container sx={{ marginTop: "155px", width: "50%" }}>
        <Button ref={targetRef2}>Button</Button>
        <Popover targetRef={targetRef2} paddingY={50} position={{ y: "top" }}>
          <Box sx={{ p: 2, bg: "blue_100" }}>
            <Heading as="h3" mb="1rem">
              Popover
            </Heading>
          </Box>
        </Popover>
      </Container>
    </Flex>
  )
}

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
          position={{ x: "default", y: "default" }}
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
