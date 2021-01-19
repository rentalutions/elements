import React, { Fragment } from "react"
import { Box, Container } from "@rent_avail/layout"
import Link from "next/link"
import { formatPath } from "utils"
import { BlogHeader, BlogFooter } from "components/blog"
import { frontMatter as blogPages } from "./**/*.mdx"

export default function BlogIndex() {
  return (
    <Fragment>
      <Container sx={{ mt: "4rem", minHeight: "100vh" }}>
        <BlogHeader />
        <Box as="main">
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
                // eslint-disable-next-line no-underscore-dangle
                <Link key={page.path} href={formatPath(page.__resourcePath)}>
                  <Box
                    as="li"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: ["1fr", "1fr 1fr"],
                      gap: "2rem",
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
                    <Box
                      as="img"
                      src={page.coverPhoto}
                      sx={{
                        maxWidth: "100%",
                        height: ["auto", "100%"],
                        objectFit: "contain",
                        bg: "blue_100",
                      }}
                    />
                    <Box>
                      <Box as="h3">{page.title}</Box>
                      <Box as="p" mt="1rem" mb="2rem">
                        {date} | {page.readingTime.text}
                      </Box>
                      <Box as="p">{page.description}</Box>
                    </Box>
                  </Box>
                </Link>
              )
            })}
          </Box>
        </Box>
      </Container>
      <BlogFooter />
    </Fragment>
  )
}
