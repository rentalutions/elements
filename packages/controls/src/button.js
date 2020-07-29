import React, { forwardRef } from "react"
import styled, { keyframes, css } from "styled-components"
import {
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  buttonStyle,
} from "styled-system"
import { lighten } from "polished"
import { motion, AnimatePresence } from "framer-motion"

// TODO: Update active state for button.

const spin = keyframes`
  0% {
      transform: rotate(0);
      stroke-dashoffset: 0;
    }
  50% {
    stroke-dashoffset: 1;
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(720deg);
    stroke-dashoffset: 0;
  }
`

const ButtonWrapper = styled.button`
  position: relative;
  appearance: none;
  border-style: solid;
  white-space: nowrap;
  border-color: ${({ theme, color }) => theme.colors[color] || color};
  text-transform: uppercase;
  outline: none;
  transition: 200ms;
  ${color};
  ${space};
  ${layout};
  ${flexbox};
  ${border};
  ${buttonStyle};
  ${typography};
  ${({ loading }) =>
    loading &&
    css`
      pointer-events: none;
    `}
  &:hover {
    color: ${({ theme }) => theme.colors.ui_100};
    background: ${({ color, theme }) => theme.colors[color] || color};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.ui_300};
    background: ${({ theme }) => theme.colors.ui_500};
    border-color: transparent;
    cursor: not-allowed;
  }
  .spinner {
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .spinner__path {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    animation: ${spin} 3s ease infinite;
    animation-fill-mode: forwards;
    transform-origin: 50% 50%;
  }
`

function Button({ children, loading, disabled, ...props }, ref) {
  return (
    <ButtonWrapper {...{ ...props, disabled, loading, ref }}>
      <AnimatePresence>
        {loading && !disabled && (
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewBox="0 0 24 24"
            fill="none"
            class="spinner"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              class="spinner__path"
              pathLength="1"
            />
          </motion.svg>
        )}
      </AnimatePresence>
      <motion.span animate={{ opacity: loading && !disabled ? 0 : 1 }}>
        {children}
      </motion.span>
    </ButtonWrapper>
  )
}

export default forwardRef(Button)

// const loadingStyles = css`
//   opacity: 0;
//   &:after {
//     content: "hello world";
//   }
// `

// const Button = styled.button`
//   appearance: none;
//   border-width: 2px;
//   cursor: pointer;
//   font-weight: 800;
//   font-size: 1.5rem;
//   font-family: inherit;
//   text-transform: uppercase;
//   transition: 250ms;
//   white-space: nowrap;
//   border-style: solid;
//   border-color: ${({ theme, color }) => theme.colors[color] || color};
//   outline: none;
//   &:focus {
//     background: ${({ color, theme }) =>
//       lighten(0.66, theme.colors[color] || color)};
//   }
//   &:hover {
//     color: ${({ theme }) => theme.colors.ui_100};
//     background: ${({ color, theme }) => theme.colors[color] || color};
//   }
//   &:disabled {
//     color: ${({ theme }) => theme.colors.ui_300};
//     background: ${({ theme }) => theme.colors.ui_500};
//     border-color: transparent;
//     cursor: not-allowed;
//   }
//   ${({ loading }) => loading && loadingStyles};
//   ${color};
//   ${space};
//   ${layout};
//   ${flexbox};
//   ${border};
//   ${buttonStyle};
// `

ButtonWrapper.defaultProps = {
  py: "1rem",
  px: "2rem",
  borderRadius: "0.25rem",
  bg: "transparent",
  color: "blue_500",
  fontSize: "body",
  fontFamily: "body",
  fontWeight: "black",
}

// export default Button
