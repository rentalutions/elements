import "styled-components"
import { baseTheme } from "./base-theme"

type ThemeType = typeof baseTheme

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
