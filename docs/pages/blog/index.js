import React from "react"
import { Box, Container } from "@rent_avail/layout"
import Link from "next/link"
import { formatPath } from "utils"
import { BlogHeader } from "components/Blog"
import { frontMatter as blogPages } from "./**/*.mdx"

export default function BlogIndex() {
  return (
    <Container sx={{ mt: "4rem" }}>
      <BlogHeader />
      <Box as="main">
        <Box as="h1" sx={{ mt: "4rem" }}>
          Welcome to Avail design
        </Box>
        <Box
          as="ul"
          sx={{
            mt: "4rem",
            listStyle: "none",
          }}
        >
          {blogPages.map((page) => {
            const date = new Date(page.publishedAt).toLocaleDateString(
              "en-US",
              {
                month: "long",
                day: "numeric",
                year: "numeric",
              }
            )
            return (
              <Link key={page.path} href={formatPath(page.__resourcePath)}>
                <Box
                  as="li"
                  sx={{
                    p: "2rem",
                    mx: ["0", "0", "-2rem"],
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "200ms",
                    "&:hover": {
                      bg: "green_100",
                      color: "green_900",
                      transform: "translateY(-0.25rem)",
                    },
                  }}
                >
                  <Box as="h2">{page.title}</Box>
                  <Box as="p" mt="1rem" mb="2rem">
                    {date} | {page.readingTime.text}
                  </Box>
                  <Box as="p">{page.description}</Box>
                </Box>
              </Link>
            )
          })}
        </Box>
      </Box>
    </Container>
  )
}
