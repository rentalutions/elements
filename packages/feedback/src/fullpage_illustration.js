import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const IllustrationWrapper = styled(motion.svg)`
  height: 30rem;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  .checkmark {
    stroke-width: 4;
    .circle {
      stroke-dasharray: 180;
    }
    .check {
      stroke-dasharray: 180;
    }
  }
  .background {
    stroke-width: 2;
  }
`

const group = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 0.95,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.3,
    },
  },
}

const path = {
  hidden: {
    strokeDashoffset: 180,
  },
  show: {
    strokeDashoffset: 0,
    transition: { type: "spring", damping: 30, stiffness: 50 },
  },
}

const backgroundGroup = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}

const backgroundPath = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: (idx) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: idx * 0.1 },
  }),
}

export default function Illustration() {
  const backgroundPaths = [
    "M44 104L38.5 109.5L36 107",
    "M131 125L121.375 134.625L117 130.25",
    "M142 51L135.125 57.875L132 54.75",
    "M46 64C49.3137 64 52 61.3137 52 58C52 54.6863 49.3137 52 46 52C42.6863 52 40 54.6863 40 58C40 61.3137 42.6863 64 46 64Z",
    "M25 84C30.5228 84 35 79.5228 35 74C35 68.4772 30.5228 64 25 64C19.4772 64 15 68.4772 15 74C15 79.5228 19.4772 84 25 84Z",
    "M159 123C163.418 123 167 119.418 167 115C167 110.582 163.418 107 159 107C154.582 107 151 110.582 151 115C151 119.418 154.582 123 159 123Z",
    "M144 101C146.209 101 148 99.2091 148 97C148 94.7909 146.209 93 144 93C141.791 93 140 94.7909 140 97C140 99.2091 141.791 101 144 101Z",
    "M23 96L15 104M15 96L23 104",
    "M169 69L159 79M159 69L169 79",
  ]
  return (
    <IllustrationWrapper viewBox="0 0 180 180">
      <motion.g
        className="checkmark"
        variants={group}
        initial="hidden"
        animate="show"
      >
        <motion.path
          className="circle"
          variants={path}
          d="M118 88.24V91C117.996 97.4693 115.902 103.764 112.028 108.945C108.155 114.127 102.71 117.917 96.5061 119.752C90.3023 121.586 83.6718 121.366 77.6034 119.124C71.535 116.882 66.354 112.738 62.8329 107.311C59.3118 101.884 57.6394 95.4642 58.065 89.0089C58.4907 82.5537 60.9916 76.409 65.1948 71.4912C69.3981 66.5734 75.0784 63.1461 81.3886 61.7204C87.6988 60.2947 94.3008 60.947 100.21 63.58"
        />
        <motion.path
          className="check"
          variants={path}
          d="M118 67L88 97.03L79 88.03"
        />
      </motion.g>
      <motion.g
        className="background"
        variants={backgroundGroup}
        initial="hidden"
        animate="show"
      >
        {backgroundPaths.map((path, idx) => (
          <motion.path
            key={path}
            d={path}
            custom={idx}
            variants={backgroundPath}
          />
        ))}
      </motion.g>
    </IllustrationWrapper>
  )
}
