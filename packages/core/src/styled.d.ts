// import original module declarations
import "styled-components"
import { baseTheme } from "./base-theme"

type themeType = typeof baseTheme

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}
