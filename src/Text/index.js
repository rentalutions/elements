import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import classNames from "classnames"

import { colors } from "../variables"

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

const Text = styled(TextLogic)`
  margin: 24px 0;
  padding: 0;
  color: ${({ color }) => (color ? color : colors.dark)};
  font-size: 1em;
  line-height: 1.334;
  &.small {
    font-size: 0.75em;
  }
  &.subtitle {
    font-size: 1.25em;
    font-weight: 600;
  }
  &.title {
    font-size: 1.5em;
  }
  &.headline {
    font-size: 2em;
  }
  &.hero {
    font-size: 4em;
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
  title: false
}

export default Text
