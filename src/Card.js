import React from 'react'
import styled from 'styled-components'
import { tint } from 'polished'
import Text from './Text'
import { colors } from './variables'

const CardWrapper = styled.div`
  padding: 1em;
  background: ${
    ({bgImage, bgColor}) => (
      bgImage ? `url(${bgImage})` : bgColor ? bgColor : colors.grey.light
    )
  };
  border-radius: 2px;
  box-shadow: 0 1px 3px ${tint(0.12, colors.grey.dark)};
  > ${Text} {
    margin-top: 0;
    color: ${colors.grey.darkSecondary};
  }
`

export default function Card ({
  className,
  children,
  title,
  cardActions,
  bgImage,
  bgColor,
  ...rest
}) {
  return (
    <CardWrapper className={className} bgImage={bgImage} bgColor={bgColor} {...rest}>
      {title && <Text title>{title}</Text>}
      {children}
    </CardWrapper>
  )
}
