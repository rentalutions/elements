import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Check, Hexagon } from "react-feather"
import { noop } from "@rent_avail/utils"

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
  .inline__step,
  .inline__loading,
  .inline__loaded {
    position: relative;
    z-index: 1;
  }
  .inline__loading {
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
  damping: 40,
  stiffness: 500,
}

export function InlineFeedback({
  duration = 2000,
  steps = [],
  onAnimationEnd = noop,
}) {
  const backgroundControls = useAnimation()
  const barControls = useAnimation()
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    async function updateCurrent() {
      if (current == steps.length - 1) {
        setLoaded(true)
      }
      if (current === steps.length) {
        await backgroundControls.start({ width: "4rem" })
        onAnimationEnd()
        return clearTimeout(updateCurrent)
      }
      await barControls.start({
        width: `${((current + 1) / steps.length) * 100}%`,
      })
      setCurrent((c) => c + 1)
    }
    setTimeout(updateCurrent, duration)
    return () => clearTimeout(updateCurrent)
  }, [current])
  return (
    <InlineWrapper
      transition={spring}
      initial={{ width: "100%" }}
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
            <Check className="inline__loaded" />
          </motion.span>
        ) : (
          <motion.span
            key="hex"
            variants={iconVariants}
            initial="initial"
            animate="animated"
            exit="exit"
          >
            <Hexagon className="inline__loading" />
          </motion.span>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="inline__step"
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
