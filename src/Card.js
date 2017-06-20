import React from 'react'
import styled from 'styled-components'
import Text from './Text'

const CardWrapper = styled.div`
  padding: 1em;
  background: ${
    ({bgImage, bgColor}) => (
      bgImage ? `url(${bgImage})` : bgColor ? bgColor : '#F9F9F9'
    )
  };
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
`

export default function Card ({
  className,
  children,
  title,
  cardActions,
  bgImage,
  bgColor
}) {
  return (
    <CardWrapper className={className} bgImage={bgImage} bgColor={bgColor}>
      {title && <Text title>{title}</Text>}
      {children}
    </CardWrapper>
  )
}
