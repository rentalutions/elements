import { Heading, Text } from "@rent_avail/typography"
import { Box, Grid, Col } from "@rent_avail/layout"

export default function PackageInfo({
  info: { source, title, install, package_name },
}) {
  return (
    <Box sx={{ bg: "blue_100", borderRadius: "0.25rem" }}>
      <Box as="h1" sx={{ p: "2rem" }}>
        {title}
      </Box>
      <Box
        as="img"
        sx={{ px: "2rem", pb: "2rem", minHeight: "4.5rem" }}
        alt="npm (scoped)"
        src={`https://img.shields.io/npm/v/@rent_avail/${package_name}?color=%237c95b0&label=version&style=for-the-badge`}
      />
      <Grid
        sx={{
          p: "2rem",
          borderTopColor: "ui_500",
          borderTopWidth: 1,
          borderTopStyle: "solid",
        }}
      >
        <Col span={[2]}>Install</Col>
        <Col span={[10]} as="code">
          {install}
        </Col>
        <Col span={[2]}>Source</Col>
        <Col span={[10]}>
          <Text
            as="a"
            color="ui_900"
            className="link"
            href={source}
            target="_blank"
          >
            Github
          </Text>
        </Col>
      </Grid>
    </Box>
  )
}
