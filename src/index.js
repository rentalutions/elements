import { injectGlobal } from "styled-components"
import Avatar from "./Avatar"
import Button from "./Button"
import Card from "./Card"
import Container from "./Container"
import FullPageModal from "./FullPageModal"
// import Stepper, { Step } from "./Stepper"
import Text from "./Text"
import Tooltip from "./Tooltip"

injectGlobal`
*,*:before,*:after {
  box-sizing: border-box;
}
`

export {
  Avatar,
  Button,
  Card,
  Container,
  FullPageModal,
  // Stepper,
  // Step,
  Text,
  Tooltip
}
