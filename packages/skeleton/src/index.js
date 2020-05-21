import React, { forwardRef } from "react"
import styled, { keyframes } from "styled-components"
import { Box } from "@rent_avail/layout"
import clsx from "clsx"

const bounce = (startColor, endColor) => keyframes`
  from {
    background: ${startColor};
  }
  to {
    background: ${endColor};
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const SkeletonWrapper = styled(Box)`
  &:not(.fade-in) {
    background: ${({ theme }) => theme.colors.ui_500};
    border-radius: 2px;
    pointer-events: none;
    user-select: none;
    opacity: 0.75;
    animation: ${({ speed }) => speed}ms ease infinite alternate
      ${({ theme: { colors } }) => bounce(colors.ui_500, colors.ui_300)};
    &::before,
    &::after,
    * {
      visibility: hidden;
    }
  }
  &.fade-in {
    animation: ${fadeIn} 480ms ease;
  }
`

function Skeleton({ className, loaded, ...props }, ref) {
  const classes = clsx(className, { "fade-in": loaded })
  const speed = Math.floor(Math.random() * (1200 - 800 + 1)) + 800
  return (
    <SkeletonWrapper {...props} ref={ref} className={classes} speed={speed} />
  )
}

export default forwardRef(Skeleton)
