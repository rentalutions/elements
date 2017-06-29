import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import iconPaths from './iconData.js'

import { colors } from '../variables'

const getPaths = iconName => {
  const icon = iconPaths.icons.find(icon => icon.tags.includes(iconName))
  if (icon) return icon.paths
  else console.warn(`icon ${iconName} does not exist`)
}

const IconMarkup = ({
  className,
  name,
  size,
  ...rest
}) => {
  const classes = classNames(className)
  return (
  <svg
    width={size || '24'}
    height={size || '24'}
    viewBox="0 0 1024 1024"
    className={classes}
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="#676065"
    strokeWidth="85.333"
    fill="none"
    >
      {getPaths(name).map((path, i) => (
        <path strokeLinecap="round"
          strokeLinejoin="round"
          d={path}
          key={`path-${i}`}
        ></path>
        ))}
  </svg>
  )
}

const Icon = styled(IconMarkup)`
  font-size: 1em;
`

Icon.displayName = 'Icon'

export default Icon
