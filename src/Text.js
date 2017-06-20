import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TextWrapper = styled.p`
  margin: 1rem 0;
  padding: 0;
  color: #404040;
  font-family: 'Open Sans';
  font-size: 1rem;
  &.small { font-size: 0.75rem; }
  &.title {
    font-size: 1.25rem;
    font-weight: 600;
  }
  &.headline { font-size: 2rem; }
  &.hero {
    font-size: 3rem;
    font-weight: 300;
  }
  &.center { text-align: center; }
  &.right { text-align: right; }
  &.bold { font-weight: bolder; }
`

export default function Text ({
  center,
  children,
  className,
  color,
  headline,
  hero,
  right,
  small,
  title
}) {
  const classes = classNames({
    center, right, hero, headline, title, small
  }, className)
  return <TextWrapper color={color} className={classes}>{children}</TextWrapper>
}

Text.propTypes = {
  center: PropTypes.bool,
  color: PropTypes.string,
  headline: PropTypes.bool,
  hero: PropTypes.bool,
  right: PropTypes.bool,
  small: PropTypes.bool,
  title: PropTypes.bool
}

Text.defaultProps = {
  center: false,
  color: '',
  headline: false,
  hero: false,
  right: false,
  small: false,
  title: false
}
