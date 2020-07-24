import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const IllustrationWrapper = styled(motion.svg)`
  max-width: 30rem;
  width: 100%;
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
    stroke: ${({ theme }) => theme.colors.blue_300};
  }
`

const group = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.3,
    },
  },
}

const path = {
  hidden: {
    pathLength: 1,
    pathOffset: 1,
  },
  show: {
    pathLength: 1,
    pathOffset: 0,
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

export function Illustration({ onAnimationEnd }) {
  const backgroundPaths = [
    "M44 61L38.5 66.5L36 64",
    "M131 82L121.375 91.625L117 87.25",
    "M142 8L135.125 14.875L132 11.75",
    "M46 21C49.3137 21 52 18.3137 52 15C52 11.6863 49.3137 9 46 9C42.6863 9 40 11.6863 40 15C40 18.3137 42.6863 21 46 21Z",
    "M25 41C30.5228 41 35 36.5228 35 31C35 25.4772 30.5228 21 25 21C19.4772 21 15 25.4772 15 31C15 36.5228 19.4772 41 25 41Z",
    "M159 80C163.418 80 167 76.4183 167 72C167 67.5817 163.418 64 159 64C154.582 64 151 67.5817 151 72C151 76.4183 154.582 80 159 80Z",
    "M144 58C146.209 58 148 56.2091 148 54C148 51.7909 146.209 50 144 50C141.791 50 140 51.7909 140 54C140 56.2091 141.791 58 144 58Z",
    "M23 53L15 61M15 53L23 61",
    "M169 26L159 36M159 26L169 36",
  ]
  return (
    <IllustrationWrapper viewBox="0 0 180 100">
      <motion.g
        className="checkmark"
        variants={group}
        initial="hidden"
        animate="show"
      >
        <motion.path
          className="circle"
          variants={path}
          d="M118 45.24V48C117.996 54.4693 115.902 60.764 112.028 65.9455C108.155 71.1269 102.71 74.9174 96.5061 76.7517C90.3023 78.586 83.6718 78.3657 77.6034 76.1237C71.535 73.8818 66.354 69.7383 62.8329 64.3112C59.3118 58.8841 57.6394 52.4642 58.065 46.0089C58.4907 39.5537 60.9916 33.409 65.1948 28.4912C69.3981 23.5734 75.0784 20.1461 81.3886 18.7204C87.6988 17.2947 94.3008 17.947 100.21 20.58"
        />
        <motion.path
          className="check"
          variants={path}
          d="M118 24L88 54.03L79 45.03"
        />
      </motion.g>
      <motion.g
        className="background"
        variants={backgroundGroup}
        initial="hidden"
        animate="show"
        onAnimationComplete={onAnimationEnd}
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
