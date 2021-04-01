import styled from "styled-components"
import css, { SystemStyleObject } from "@styled-system/css"
import { system } from "styled-system"

export type SXObject = SystemStyleObject & { text?: string | string[] }

export const sx = ({ sx = {} }: { sx?: SXObject }) => {
  const { text, ...styleProps } = sx
  if (text) {
    const textArray = Array.isArray(text) ? text : [text]
    return css({
      variant: textArray.map((txt: string) => `text.${txt}`),
      ...styleProps,
    })
  }
  return css(styleProps)
}

export const Box = styled.div(sx)

interface ContainerProps {
  sx?: SXObject
}

export const Container = styled.section<ContainerProps>(
  css({ maxWidth: "80rem", mx: "auto", px: "2rem" }),
  sx
)

interface GridContainerProps {
  columns?: number
  sx?: SXObject
}

export const Grid = styled.section<GridContainerProps>(
  css({ display: "grid", gap: 2 }),
  system({
    columns: {
      property: "gridTemplateColumns",
      transform: (value) => {
        return `repeat(${value}, 1fr)`
      },
    },
  }),
  sx
)

Grid.defaultProps = {
  columns: 12,
}

interface ColProps {
  span?: string | number | (string | number)[]
  sx?: SXObject
}

export const Col = styled.section<ColProps>(
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

export const Card = styled.div<CardProps>(
  css({
    p: "2rem",
    borderRadius: 4,
    border: "1px solid transparent",
    borderColor: "ui_500",
    boxShadow: 2,
    bg: "ui_100",
  }),
  sx
)

interface FlexProps {
  sx?: SXObject
}

export const Flex = styled.div<FlexProps>({ display: "flex" }, sx)

interface StackProps {
  sx?: SXObject
  direction?: string | string[]
  gap?: string | string[]
}

export const Stack = styled.div<StackProps>(
  css({ display: "flex" }),
  system({
    direction: {
      property: "flexDirection",
    },
    gap: {
      property: "gap",
    },
  }),
  sx
)

Stack.defaultProps = { direction: "column", gap: "2rem" }
