import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import classNames from "classnames"

import theme from "../variables"

function TextLogic({
  center,
  children,
  className,
  headline,
  hero,
  right,
  small,
  subtitle,
  title,
  ...rest
}) {
  const classes = classNames(
    {
      center,
      right,
      hero,
      headline,
      title,
      small,
      subtitle
    },
    "rnt-text",
    className
  )
  return hero ? (
    <h1 className={classes} {...rest}>
      {children}
    </h1>
  ) : headline ? (
    <h2 className={classes} {...rest}>
      {children}
    </h2>
  ) : title ? (
    <h3 className={classes} {...rest}>
      {children}
    </h3>
  ) : subtitle ? (
    <h4 className={classes} {...rest}>
      {children}
    </h4>
  ) : (
            <p className={classes} {...rest}>
              {children}
            </p>
          )
}

const Text = styled(TextLogic) `
  margin: ${({ theme }) => theme.sizing}px 0 ${({ theme }) => theme.sizing / 2}px;
  padding: 0;
  color: ${({ theme }) => theme.colors.ui.dark};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  line-height: 1.5;
  &.subtitle,
  &.title,
  &.headline,
  &.hero {
    line-height: 1.125;
  }
  &.small {
    font-size: 0.875em;
  }
  &.subtitle {
    font-size: 1.5em;
    font-weight: 600;
  }
  &.title {
    font-size: 2.25em;
  }
  &.headline {
    font-size: 3em;
  }
  &.hero {
    font-size: 4.5em;
    font-weight: 300;
  }
  &.center {
    text-align: center;
  }
  &.right {
    text-align: right;
  }
  &.bold {
    font-weight: bolder;
  }
`

Text.displayName = "Text"

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
  headline: false,
  hero: false,
  right: false,
  small: false,
  title: false,
  theme
}

export default Text
