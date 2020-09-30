import React, { forwardRef } from "react"
import styled, { keyframes, css } from "styled-components"
import {
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  variant,
  compose,
} from "styled-system"
import { motion, AnimatePresence } from "framer-motion"

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

const ButtonWrapper = styled("button")(
  variant({
    variants: {
      default: {
        bg: "transparent",
        color: "blue_500",
        borderColor: "blue_500",
        "&:hover": {
          bg: "blue_500",
          color: "ui_100",
        },
      },
      primary: {
        color: "ui_100",
        bg: "blue_500",
        borderColor: "blue_500",
        fontFamily: "body",
        "&:hover": {
          bg: "blue_700",
          color: "blue_300",
        },
        "&:focus": {
          bg: "blue_700",
        },
      },
      danger: {
        bg: "transparent",
        color: "red_500",
        borderColor: "red_500",
        "&:hover": {
          bg: "red_500",
          color: "ui_100",
        },
        "&:focus": {
          bg: "red_300",
        },
      },
    },
  }),
  ({ theme, textColor, color: bgColor }) => css`
    position: relative;
    appearance: none;
    border-style: solid;
    border-width: 2px;
    border-color: ${theme.colors[bgColor] || bgColor};
    cursor: pointer;
    text-transform: uppercase;
    transition: 200ms;
    outline: none;
    white-space: nowrap;
    &:hover {
      background-color: ${theme.colors[bgColor] || bgColor};
      color: ${textColor || theme.colors.ui_100};
    }
    &:disabled {
      color: ${theme.colors.ui_300};
      background: ${theme.colors.ui_500};
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
      animation: ${spin} 3s ease infinite;
      stroke-dasharray: 1;
      stroke-dashoffset: 0;
      animation-fill-mode: forwards;
      transform-origin: 50% 50%;
    }
  `,
  compose(color, space, layout, flexbox, border, typography)
)

ButtonWrapper.defaultProps = {
  py: "1rem",
  px: "2rem",
  borderRadius: "0.25rem",
  fontSize: "body",
  fontFamily: "body",
  fontWeight: "black",
  variant: "default",
}

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

function Button({ children, loading, disabled, ...props }, ref) {
  const isLoading = loading && !disabled
  return (
    <ButtonWrapper {...{ ...props, disabled, ref }}>
      <AnimatePresence>
        {isLoading && (
          <motion.svg
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            viewBox="0 0 24 24"
            fill="none"
            className="spinner"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="spinner__path"
              pathLength="1"
            />
          </motion.svg>
        )}
      </AnimatePresence>
      <motion.span
        variants={variants}
        animate={isLoading ? "initial" : "enter"}
      >
        {children}
      </motion.span>
    </ButtonWrapper>
  )
}

export default forwardRef(Button)
