import React from "react"
import styled from "styled-components"
import Text from "../Text"
import { sizing, colors } from "../variables"

const Wrapper = styled.div`
  padding: ${sizing / 2}px;
  background: ${({ bgImage, bgColor }) =>
    bgImage ? `url(${bgImage})` : bgColor ? bgColor : colors.light};
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  .card-title {
    margin-top: 0;
    color: ${colors.darkGray};
  }
  @media (min-width: ${sizing * 30}px) {
    padding: ${sizing}px;
  }
`

export default function Card({
  className,
  children,
  title,
  cardActions,
  bgImage,
  bgColor,
  ...rest
}) {
  return (
    <Wrapper
      className={className}
      bgImage={bgImage}
      bgColor={bgColor}
      {...rest}
    >
      {title && (
        <Text title className="card-title">
          {title}
        </Text>
      )}
      {children}
    </Wrapper>
  )
}
