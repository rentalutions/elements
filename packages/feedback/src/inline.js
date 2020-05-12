import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Check, Hexagon } from "react-feather"

const InlineWrapper = styled(motion.section)`
  display: grid;
  position: relative;
  grid-auto-flow: column;
  justify-content: start;
  padding: 1rem;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.green_300};
  border-radius: 2rem;
  height: 4rem;
  overflow: hidden;
  .inline__loading-icon {
    animation: spin 2000ms infinite;
  }
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const LoadingBar = styled(motion.div)`
  position: absolute;
  height: 100%;
  background: ${({ theme }) => theme.colors.green_500};
  left: 0;
  top: 0;
  z-index: 0;
`

const iconVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animated: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
}

const spring = {
  type: "spring",
  damping: 30,
  stiffness: 250,
  when: "beforeChildren",
}

function InlineFeedback({ duration = 4000, steps = [] }) {
  const backgroundControls = useAnimation()
  const barControls = useAnimation()
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    backgroundControls.start({ width: "100%" })
  }, [])
  useEffect(() => {
    async function updateCurrent() {
      if (current == steps.length - 1) {
        setLoaded(true)
      }
      if (current === steps.length) {
        await backgroundControls.start({ width: "4rem" })
        return clearTimeout(updateCurrent)
      }
      await barControls.start({ width: `${(current / steps.length) * 100}%` })
      setCurrent((c) => c + 1)
    }
    setTimeout(updateCurrent, duration - duration / steps.length)
    return () => clearTimeout(updateCurrent)
  }, [current])
  return (
    <InlineWrapper
      transition={spring}
      initial={{ width: "4rem" }}
      animate={backgroundControls}
    >
      <LoadingBar initial={{ width: 0 }} animate={barControls} />
      <AnimatePresence exitBeforeEnter>
        {loaded ? (
          <motion.span
            key="check"
            variants={iconVariants}
            initial="initial"
            animate="animated"
            exit="exit"
          >
            <Check />
          </motion.span>
        ) : (
          <motion.span
            key="hex"
            variants={iconVariants}
            initial="initial"
            animate="animated"
            exit="exit"
          >
            <Hexagon className="inline__loading-icon" />
          </motion.span>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={steps[current]}
          initial={{ opacity: 0, y: "1rem" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-1rem" }}
        >
          {steps[current]}
        </motion.div>
      </AnimatePresence>
    </InlineWrapper>
  )
}

export default InlineFeedback
