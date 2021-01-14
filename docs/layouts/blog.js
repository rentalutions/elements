import React, { Fragment } from "react"
import { Box, Container } from "@rent_avail/layout"
import Link from "next/link"
import { Twitter, Linkedin, Facebook } from "react-feather"
import { NextSeo } from "next-seo"
import { BlogHeader, BlogFooter } from "components/blog"
import { formatPath } from "utils"

export default function BlogLayout({ children: content, frontMatter }) {
  // eslint-disable-next-line no-underscore-dangle
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
      <Container my="4rem" as="main">
        <Box as="img" src={frontMatter.coverPhoto} sx={{ maxWidth: "100%" }} />
        <Box as="h1" sx={{ mt: "2rem", mb: "2rem" }}>
          {frontMatter.title}
        </Box>
        <Box as="p" mb="4rem" color="ui_700">
          {frontMatter.author} | {publishedAt} | {frontMatter.readingTime.text}
        </Box>
        {content}
      </Container>
      <Container
        as="aside"
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
        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=https://design.avail.co/${pagePath}`}
        >
          <Box
            as={Linkedin}
            sx={{
              color: "blue_500",
              cursor: "pointer",
              "&:hover": { color: "blue_300" },
            }}
          />
        </Link>
        <Link
          href={`https://www.facebook.com/dialog/share?app_id=145634995501895&href=https://design.avail.co/${pagePath}`}
        >
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
      <BlogFooter />
    </Fragment>
  )
}
