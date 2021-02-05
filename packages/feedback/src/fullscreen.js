import React, { useEffect, useReducer, createElement } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { usePortal, noop } from "@rent_avail/utils"
import { Heading, Text } from "@rent_avail/typography"
import { Box, Flex } from "@rent_avail/layout"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { Illustration } from "./fullscreen_illustration"

const FullscreenWrapper = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  align-content: center;
  justify-items: center;
  background: ${({ theme }) => theme.colors.blue_100};
  color: ${({ theme }) => theme.colors.blue_500};
  .fullpage__step {
    text-align: center;
  }
  .fullpage__loading-background {
    position: relative;
    background: ${({ theme }) => theme.colors.blue_300};
    height: 0.5rem;
    width: 30rem;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .fullpage__loading-bar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.blue_500};
  }
`

const variants = {
  hidden: { opacity: 0, y: "1rem" },
  visible: { opacity: 1, y: 0, height: "auto" },
  exit: { opacity: 0, y: "-1rem" },
  exitLast: { opacity: 0, height: 0 },
}

const initialState = {
  current: 0,
  loaded: false,
}

function fullscreenReducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case "INCREMENT":
      return { ...state, current: state.current + 1 }
    case "LOADED":
      return { ...state, loaded: true }
    case "RESET":
      return { ...state, loaded: false, current: 0 }
    default:
      throw Error(`Unknown action: ${type}`)
  }
}

export function FullscreenFeedback({
  open = false,
  duration = 2000,
  steps = [],
  success = "",
  onAnimationEnd = noop,
}) {
  const [{ current, loaded }, dispatch] = useReducer(
    fullscreenReducer,
    initialState
  )
  const barControls = useAnimation()
  const portalTarget = usePortal()
  useEffect(() => {
    async function updateCurrent() {
      if (current === steps.length) {
        dispatch({ type: "LOADED" })
        return clearTimeout(updateCurrent)
      }
      await barControls.start({
        width: `${((current + 1) / steps.length) * 100}%`,
      })
      dispatch({ type: "INCREMENT" })
    }
    if (open) setTimeout(updateCurrent, duration)
    return () => clearTimeout(updateCurrent)
  }, [current, open])
  useEffect(() => {
    if (!open) dispatch({ type: "RESET" })
  }, [open])
  if (!portalTarget) return null
  return createPortal(
    <AnimatePresence>
      {open ? (
        <FullscreenWrapper
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
        >
          <Box height="15rem">
            {loaded && <Illustration onAnimationEnd={onAnimationEnd} />}
          </Box>
          <Box minHeight="5rem" mt="2rem">
            <AnimatePresence exitBeforeEnter>
              {steps[current] && (
                <Text
                  as={motion.p}
                  className="fullpage__step"
                  key={steps[current]}
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit={current - 1 === steps.length ? "exitLast" : "exit"}
                >
                  {steps[current]}
                </Text>
              )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
              {loaded ? (
                <Box
                  key="success-section"
                  variants={variants}
                  as={motion.section}
                  initial="hidden"
                  animate="visible"
                >
                  {typeof success === "function"
                    ? createElement(success)
                    : success}
                </Box>
              ) : (
                <Box
                  mt="2rem"
                  key="loading-bar"
                  as={motion.div}
                  className="fullpage__loading-background"
                  exit={{ opacity: 0, height: 0, marginBottom: "0px" }}
                >
                  <motion.div
                    layout
                    className="fullpage__loading-bar"
                    initial={{ width: 0 }}
                    animate={barControls}
                  />
                </Box>
              )}
            </AnimatePresence>
          </Box>
        </FullscreenWrapper>
      ) : null}
    </AnimatePresence>,
    portalTarget
  )
}
