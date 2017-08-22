import { injectGlobal } from 'styled-components'

injectGlobal`
  *,*:before,*:after {
    box-sizing: border-box;
  }
`

import Avatar from './Avatar'
import Button from './Button'
import Card from './Card'
import Container from './Container'
import Dropdown from './Dropdown'
import Field from './Field'
import Loader from './Loader'
import Text from './Text'
import Tooltip from './Tooltip'

export {
  Avatar,
  Button,
  Card,
  Container,
  Dropdown,
  Image,
  Field,
  Loader,
  Text,
  Tooltip
}
