import styled from "styled-components"
import css, { SystemStyleObject } from "@styled-system/css"
import { system, GridGapProps, SpaceProps, LayoutProps } from "styled-system"

export type SXObject = SystemStyleObject & { text?: string | string[] }

export const sx = ({ sx = {} }: { sx?: SXObject }) => {
  const { text, ...styleProps } = sx
  if (text) {
    const textArray = Array.isArray(text) ? text : [text]
    return css({
      variant: textArray.map((textVariant: string) => `text.${textVariant}`),
      ...styleProps,
    })
  }
  return css(styleProps)
}

/**
 * Box: A low level layout component.
 *
 * Boxes should be treated as a completely customizable node charged with theme aware
 * super powers. Use `as` to change the underlying html tag. To view helpful examples go
 * to https://design.avail.co/elements/core#box
 *
 * @example
 *
 * <Box as="h2" sx={{background: "blue_500"}}>Hello World</Box>
 */

export const Box = styled("div")<{ sx?: SXObject }>(sx)

interface ContainerProps extends SpaceProps, LayoutProps {
  sx?: SXObject
}

/**
 * Container: A wrapper for repsonsive design.
 *
 * Containers should wrap most if not all layout sections on the screen. Containers are
 * responsible for keeping the layout from growing too large horizontally and becoming
 * unreadable. To view helpful examples go to
 * https://design.avail.co/elements/core#container
 *
 * @example
 *
 * <Container>
 *   <PageLayout />
 * </Container>
 */

export const Container = styled.section<ContainerProps>(
  css({ maxWidth: (theme) => theme.containerWidth, mx: "auto", px: "2rem" }),
  sx
)

interface GridProps extends GridGapProps {
  columns?: number
  sx?: SXObject
}

/**
 * Grid: A container for grid based layouts.
 *
 * Grids should be the direct parents of any Col components in your layout. You can
 * customize the columns, and the gap between rows and columns using props. To view
 * helpful examples go to https://design.avail.co/elements/core#grid
 *
 * @example
 *
 * <Grid gap="3rem">
 *   <Col span={6}>6 columns, or half the default 12 grid.</Col>
 * </Grid>
 */

export const Grid = styled.section<GridProps>(
  system({
    columns: {
      property: "gridTemplateColumns",
      transform: (value) => `repeat(${value}, 1fr)`,
    },
  }),
  css({
    display: "grid",
    gap: "2rem",
  }),
  sx
)

Grid.defaultProps = {
  columns: 12,
}

interface ColProps {
  span?: string | number | (string | number)[] | [string, string]
  sx?: SXObject
}

/**
 * Col: A column component.
 *
 * Use columns as direct children of a Grid. Cols can span multiple rows without needing
 * multiple grid parents. The number of columns a Col stretches is set using `span`, if a
 * column needs to span more than one row, use `spanRow`. To view helpful examples go to
 * https://design.avail.co/elements/core#col
 *
 * @example
 *
 * <Grid>
 *   <Col span={6}>Span 6</Col>
 *   <Col span={6}>Span 6</Col>
 *   <Col span={4}>Span 4</Col>
 *   <Col span={4}>Span 4</Col>
 *   <Col span={4}>Span 4</Col>
 * </Grid>
 */

export const Col = styled.div<ColProps>(
  system({
    span: {
      property: "gridColumn",
      transform: (value) => {
        const valueType = typeof value
        if (valueType === "string") {
          if (value.includes("/")) return value
          return `span ${value}`
        }
        if (valueType === "number") {
          return `span ${value}`
        }
        if (Array.isArray(value)) {
          return `${value[0]} / ${value[1]}`
        }
        throw Error("Must return a string, number, or tuple.")
      },
    },
  }),
  sx
)

Col.defaultProps = {
  span: "1 / -1",
}

interface CardProps {
  sx?: SXObject
}

/**
 * Card: A container for info and actions on a single subject.
 *
 * Cards should be scannable for relevant content. Elements like headers, and buttons
 * should be laid out in a way that clearly indicated hierarchy. Cards should be ideally
 * reserved for lists with complex data structures. To view helpful examples go to
 * https://design.avail.co/elements/core#card
 *
 * @example
 *
 * <Card>
 *   <Box as="h3">Rent Roll</Box>
 *   <Box as="p">This is your rent collection report across all units.</Box>
 * </Card>
 */

export const Card = styled.div<CardProps>(
  css({
    p: "2rem",
    borderRadius: 4,
    border: "1px solid transparent",
    borderColor: "border.secondary",
    boxShadow: 2,
    bg: "background.primary",
  }),
  sx
)

interface FlexProps {
  sx?: SXObject
}

/**
 * Flex: A container with flex layout by default.
 *
 * Flex is just a div that has display flex applied to it. Can be used to dry out layouts
 * a bit and give more semantic understanding to anyone going through the layout.
 *
 * @example
 *
 * <Flex>
 *   <Box>I'm flexible</Box>
 *   <Box>I'm flexible</Box>
 * </Flex>
 */

export const Flex = styled.div<FlexProps>({ display: "flex" }, sx)

interface StackProps {
  sx?: SXObject
  direction?: string | string[]
  gap?: string | string[]
}

/**
 * Stack: A flexible container with a built in gap between children.
 *
 * Stacks can be used as a way to quickly layout lists of items whether vertically or
 * horizontally. The gap between components can be adjusted using `gap`.
 *
 * @example
 *
 * <Stack>
 *   <Box>There's a gap below me.</Box>
 *   <Box>Me too</Box>
 *   <Box>Not me.</Box>
 * </Stack>
 */

export const Stack = styled.div<StackProps>(
  css({ display: "inline-flex", alignItems: "start", gap: "2rem" }),
  system({
    direction: {
      property: "flexDirection",
    },
  }),
  sx
)

Stack.defaultProps = { direction: "column" }
