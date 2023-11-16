import "styled-components"
import { baseTheme } from "./theme"

type ThemeType = typeof baseTheme

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
