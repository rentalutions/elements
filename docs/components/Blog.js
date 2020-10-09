import React from "react"
import { Box } from "@rent_avail/layout"
import Link from "next/link"

export function BlogHeader() {
  return (
    <Box
      as="header"
      sx={{
        display: "flex",
        "& > a": { color: "blue_500", cursor: "pointer" },
      }}
    >
      <Link href="/">
        <Box
          as="a"
          sx={{
            display: "flex",
            alignItems: "center",
            "&:hover": {
              color: "blue_900",
              "> img": {
                filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.24))",
              },
            },
          }}
        >
          <Box
            as="img"
            src="/images/avail_icon.svg"
            sx={{ height: "3rem", mr: "1rem", transition: "200ms" }}
          />
          <Box as="span" sx={{ fontSize: "3rem" }}>
            Design
          </Box>
        </Box>
      </Link>
      <Link href="/blog">
        <Box
          as="a"
          sx={{
            ml: "auto",
            fontSize: "3rem",
            "&:hover": { color: "blue_900" },
          }}
        >
          Articles
        </Box>
      </Link>
    </Box>
  )
}
