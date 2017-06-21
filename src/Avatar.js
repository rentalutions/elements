import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import { colors } from './variables'
import Text from './Text'

const AvatarLogic = ({
  className,
  initials,
  image,
  ...rest
}) => {
  const classes = classNames('avatar', className)
  return (
    <div className={classes} {...rest}>
      {
        image ? <img src={image} alt="avatar image"/>
        : <Text>{initials}</Text>
      }
    </div>
  )
}

const Avatar = styled(AvatarLogic).attrs({
  size: props => props.lg ? '5em' : props.sm ? '2em' : '3em'
})`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({bgColor}) => bgColor ? bgColor : colors.grey.darkSecondary };
  height: ${props => props.size};
  width: ${props => props.size};
  overflow: hidden;
  > ${Text} {
    margin: 0;
    padding: 0;
    color: ${colors.grey.light};
    font-size: ${props => props.sm ? '0.75em' : 'inherit'};
  }
  img {
    width: 100%;
  }
`

export default Avatar
