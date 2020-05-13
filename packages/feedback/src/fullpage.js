import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { usePortal, noop } from "@rent_avail/utils"
import { Heading, Text } from "@rent_avail/typography"
import { Box } from "@rent_avail/layout"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import Illustration from "./fullpage_illustration"

const FullpageWrapper = styled(motion.section)`
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

const stepVariants = {
  hidden: { opacity: 0, y: "1rem" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-1rem" },
}

const successMessageVariants = {
  hidden: { opacity: 0, y: "1rem" },
  visible: { opacity: 1, y: 0 },
}

export default function FullpageFeedback({
  duration = 2000,
  steps = [],
  successMessage = "",
  onAnimationEnd = noop,
}) {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const barControls = useAnimation()
  useEffect(() => {
    async function updateCurrent() {
      if (current === steps.length) {
        setLoaded(true)
        return clearTimeout(updateCurrent)
      }
      await barControls.start({
        width: `${((current + 1) / steps.length) * 100}%`,
      })
      setCurrent((c) => c + 1)
    }

    setTimeout(updateCurrent, duration)
  }, [current])
  return (
    <FullpageWrapper>
      <Box height="20rem">
        {loaded && <Illustration onAnimationEnd={onAnimationEnd} />}
      </Box>
      <Box minHeight="5rem" mt="2rem">
        <AnimatePresence exitBeforeEnter>
          <Text
            as={motion.p}
            className="fullpage__step"
            key={steps[current]}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {steps[current]}
          </Text>
        </AnimatePresence>
        {loaded && (
          <Heading
            variants={successMessageVariants}
            as={motion.h3}
            initial="hidden"
            animate="visible"
          >
            {successMessage}
          </Heading>
        )}
      </Box>
      <Box mt="2rem" mb="10rem" className="fullpage__loading-background">
        <motion.div
          className="fullpage__loading-bar"
          initial={{ width: 0 }}
          animate={barControls}
        />
      </Box>
    </FullpageWrapper>
  )
}
