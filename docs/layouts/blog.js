import React, { Fragment } from "react"
import { Box, Container, Grid, Col } from "@rent_avail/layout"
import Link from "next/link"
import { BlogHeader } from "components/Blog"
import { Twitter, Linkedin, Facebook } from "react-feather"
import { NextSeo } from "next-seo"
import { formatPath } from "utils"

export default function BlogLayout({ children: content, frontMatter }) {
  const pagePath = formatPath(frontMatter.__resourcePath)
  const publishedAt = new Date(frontMatter.publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  )
  return (
    <Fragment>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        canonical={`https://design.avail.co/${pagePath}`}
        openGraph={{
          images: [
            {
              url: `https://design.avail.co${frontMatter.coverPhoto}`,
              width: 800,
              height: 600,
              alt: "OG Image",
            },
          ],
          article: {
            publishedTime: frontMatter.publishedAt,
            authors: frontMatter.author,
          },
        }}
      />
      <Container as="header" my="4rem">
        <BlogHeader />
      </Container>
      <Container my="4rem">
        <Box as="img" src={frontMatter.coverPhoto} sx={{ maxWidth: "100%" }} />
        <Box as="h1" sx={{ mt: "2rem", mb: "2rem" }}>
          {frontMatter.title}
        </Box>
        <Box as="p" mb="4rem" color="ui_700">
          {frontMatter.author} | {publishedAt}
        </Box>
        {content}
      </Container>
      <Container
        sx={{
          my: "4rem",
          display: "flex",
          justifyContent: "flex-end",
          flexWrap: "wrap",
          "& > svg:not(:first-of-type)": { ml: "2rem" },
        }}
      >
        <Box as="h5" sx={{ width: "100%", mb: "2rem", textAlign: "right" }}>
          Share on social media
        </Box>
        <Link
          href={`http://www.twitter.com/share?url=https://design.avail.co/${pagePath}`}
        >
          <Box
            as={Twitter}
            sx={{
              color: "blue_500",
              cursor: "pointer",
              "&:hover": { color: "blue_300" },
            }}
          />
        </Link>
        <Link href="">
          <Box
            as={Linkedin}
            sx={{
              color: "blue_500",
              cursor: "pointer",
              "&:hover": { color: "blue_300" },
            }}
          />
        </Link>
        <Link href="">
          <Box
            as={Facebook}
            sx={{
              color: "blue_500",
              cursor: "pointer",
              "&:hover": { color: "blue_300" },
            }}
          />
        </Link>
      </Container>
      <Box as="footer" sx={{ bg: "blue_100", py: "6rem" }}>
        <Container as={Grid}>
          <Col span={12}>
            <Link href="https://typeform.com">
              <Box
                as="a"
                sx={{ color: "blue_500", fontSize: "3rem", cursor: "pointer" }}
              >
                Give us feedback
              </Box>
            </Link>
          </Col>
          <Col span={12} sx={{ color: "ui_700" }}>
            © Copyright 2020 Avail, Inc. All rights reserved. Various trademarks
            held by their respective owners.
          </Col>
        </Container>
      </Box>
    </Fragment>
  )
}
