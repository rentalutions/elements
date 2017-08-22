import React from 'react'
import styled from 'styled-components'
import { sizes } from '../variables'

const Container = styled.div.attrs({
  padding: props => props.padded ? '1em' : 'initial'
})`
  max-width: sizes.xLarge;
  padding: ${props => props.padding};
`

Container.displayName = 'Container'

export default Container
