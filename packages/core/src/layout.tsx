import { CSSObject } from "@styled-system/css"
import styled from "styled-components"
import {
  space,
  layout,
  grid,
  system,
  GridProps,
  LayoutProps,
  SpaceProps,
} from "styled-system"
import { sx } from "./elements-provider"

export const Box = styled.div(sx)

interface ContainerProps extends LayoutProps, SpaceProps {
  sx?: CSSObject
}

export const Container = styled.section<ContainerProps>(space, layout, sx)

Container.defaultProps = {
  maxWidth: "80rem",
  mx: "auto",
}

interface GridContainerProps extends GridProps {
  sx?: CSSObject
  columns?: number | string | (number | string)[]
}

export const Grid = styled.section<GridContainerProps>(
  { display: "grid" },
  grid,
  system({
    columns: {
      property: "gridTemplateColumns",
      transform: (value) => `repeat(${value}, 1fr)`,
    },
  }),
  sx
)

Grid.defaultProps = {
  gridGap: "2rem",
  columns: 12,
}

interface ColProps extends GridProps {
  sx?: CSSObject
  span?: string | number | [string, string] | (string | number)[]
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
