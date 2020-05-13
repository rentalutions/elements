import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { usePortal, noop } from "@rent_avail/utils"
import { Heading, Text } from "@rent_avail/typography"
import { Box } from "@rent_avail/layout"
import { motion, AnimatePresence } from "framer-motion"
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
  background: ${({ theme }) => theme.colors.blue_500};
  color: ${({ theme }) => theme.colors.blue_100};
  .fullpage__step {
    text-align: center;
  }
  .fullpage__loading-background {
    position: relative;
    background: ${({ theme }) => theme.colors.blue_300};
    height: 0.5rem;
    width: 30rem;
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
  duration = 4000,
  steps = [],
  successMessage = "",
  onAnimationEnd = noop,
}) {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    async function updateCurrent() {
      if (current === steps.length) {
        setLoaded(true)
        clearTimeout(updateCurrent)
      } else setCurrent((c) => c + 1)
    }
    setTimeout(updateCurrent, duration)
  }, [current])
  return (
    <FullpageWrapper>
      {loaded && <Illustration />}
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
      <Box mt="2rem" className="fullpage__loading-background">
        <motion.div className="fullpage__loading-bar" />
      </Box>
    </FullpageWrapper>
  )
}

// const StyledFeedback = styled(motion.section)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 2rem;
//   background: ${({ theme }) => theme.colors.blue_500};
//   color: ${({ theme }) => theme.colors.blue_100};
//   .feedback__steps {
//     position: absolute;
//     color: ${({ theme }) => theme.colors.ui_100};
//   }
//   .feedback__loading {
//     display: block;
//     margin-top: 2rem;
//     max-width: 40rem;
//   }
//   .feedback__illustration {
//     h2 {
//       margin-top: 2rem;
//       text-align: center;
//     }
//     svg {
//       display: block;
//       width: 100%;
//       max-width: 10rem;
//       margin: 0 auto;
//     }
//   }
//   .feedback__path {
//     stroke-width: 4;
//     stroke-linecap: round;
//     stroke: ${({ theme }) => theme.colors.blue_700};
//   }
//   .feedback__path-main {
//     stroke-width: 4;
//     stroke-linecap: round;
//     stroke: ${({ theme }) => theme.colors.green_500};
//   }
//   .feedback__check {
//     stroke-width: 8;
//     stroke-linecap: round;
//     stroke: ${({ theme }) => theme.colors.blue_100};
//   }
//   .illustration__accent {
//     stroke: ${({ theme }) => theme.colors.blue_300};
//   }
// `

// const feedback = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//   },
//   exit: { opacity: 0 },
// }

// const stepVariant = {
//   initial: { opacity: 0, y: 12 },
//   animate: { opacity: [0, 1, 1, 1, 0], y: [12, 0, 0, 0, 0] },
// }

// const load = {
//   initial: { pathLength: 0, pathOffset: 0 },
//   animate: { pathLength: 1, pathOffset: 0 },
// }

// const scene = {
//   initial: {
//     opacity: 0,
//     scale: 0.8,
//   },
//   animate: {
//     opacity: 1,
//     scale: 1,
//   },
// }

// const checkPath = {
//   initial: { pathLength: 1, pathOffset: 1 },
//   animate: { pathLength: 1, pathOffset: 0 },
// }

// const shift = {
//   initial: {
//     scale: 0.2,
//   },
//   animate: {
//     scale: 1,
//     transition: {
//       flip: Infinity,
//       duration: 2,
//     },
//   },
// }

// export default function Feedback({
//   open,
//   duration = 4000,
//   onAnimationEnd = noop,
//   steps = [],
//   successMessage,
// }) {
//   const target = usePortal()
//   useEffect(() => {
//     if (open) {
//       setTimeout(onAnimationEnd, timeout)
//     }
//   }, [open, onAnimationEnd, timeout])
//   return createPortal(
//     <AnimatePresence>
//       {open && (
//         <StyledFeedback
//           variants={feedback}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//         >
//           {steps.map((step, idx) => (
//             <motion.p
//               key={idx}
//               className="feedback__steps"
//               variants={stepVariant}
//               transition={{
//                 duration: (timeout * 0.5) / steps.length / 1000,
//                 delay:
//                   ((timeout * 0.75) / steps.length / 1000) *
//                   Math.max(idx, 0.25),
//               }}
//             >
//               {step}
//             </motion.p>
//           ))}
//           <Illustration duration={timeout} successMessage={successMessage} />
//           <LoadingBar duration={timeout} />
//         </StyledFeedback>
//       )}
//     </AnimatePresence>,
//     target
//   )
// }

// function LoadingBar({ duration }) {
//   return (
//     <svg viewBox="0 0 484 4" fill="none" className="feedback__loading">
//       <path className="feedback__path" d="M2 2L482 2.00004" />
//       <motion.path
//         d="M2 2L482 2.00004"
//         className="feedback__path-main"
//         variants={load}
//         transition={{
//           duration: (duration * 0.6) / 1000,
//           delay: (duration * 0.1) / 1000,
//         }}
//       />
//     </svg>
//   )
// }

// function Illustration({ duration, successMessage }) {
//   return (
//     <motion.div
//       className="feedback__illustration"
//       variants={scene}
//       transition={{
//         delay: (duration * 0.75) / 1000,
//       }}
//     >
//       <svg
//         className="feedback__illustration"
//         variants={scene}
//         viewBox="0 0 229 217"
//         fill="none"
//       >
//         <motion.path
//           d="M158 120.4V125C157.994 135.782 154.502 146.273 148.047 154.909C141.591 163.545 132.516 169.862 122.177 172.919C111.837 175.977 100.786 175.609 90.6723 171.873C80.5584 168.136 71.9232 161.23 66.0548 152.185C60.1863 143.14 57.3989 132.44 58.1084 121.682C58.8178 110.923 62.986 100.682 69.9914 92.4854C76.9967 84.2891 86.4639 78.5769 96.9809 76.2007C107.498 73.8245 118.501 74.9117 128.35 79.3"
//           variants={checkPath}
//           className="feedback__check"
//           transition={{
//             duration: (duration - 400) / 9 / 1000,
//             delay: ((duration - 300) * 0.9) / 1000,
//           }}
//         />
//         <motion.path
//           d="M158 85L108 135.05L93 120.05"
//           variants={checkPath}
//           className="feedback__check"
//           transition={{
//             duration: (duration - 300) / 9 / 1000,
//             delay: ((duration - 300) * 0.9) / 1000,
//           }}
//         />
//         <motion.path
//           variants={shift}
//           d="M192 59C194.761 59 197 56.7614 197 54C197 51.2386 194.761 49 192 49C189.239 49 187 51.2386 187 54C187 56.7614 189.239 59 192 59Z"
//           strokeWidth="2"
//           strokeLinecap="round"
//           className="illustration__accent"
//         />
//         <motion.path
//           variants={shift}
//           d="M43 63C48.5228 63 53 58.5228 53 53C53 47.4772 48.5228 43 43 43C37.4772 43 33 47.4772 33 53C33 58.5228 37.4772 63 43 63Z"
//           strokeWidth="2"
//           strokeLinecap="round"
//           className="illustration__accent"
//         />
//         <motion.path
//           variants={shift}
//           d="M180 203C185.523 203 190 198.523 190 193C190 187.477 185.523 183 180 183C174.477 183 170 187.477 170 193C170 198.523 174.477 203 180 203Z"
//           strokeWidth="2"
//           strokeLinecap="round"
//           className="illustration__accent"
//         />
//         <motion.path
//           variants={shift}
//           d="M6 130C8.76142 130 11 127.761 11 125C11 122.239 8.76142 120 6 120C3.23858 120 1 122.239 1 125C1 127.761 3.23858 130 6 130Z"
//           strokeWidth="2"
//           strokeLinecap="round"
//           className="illustration__accent"
//         />
//         <motion.g clip-path="url(#clip0)" variants={shift}>
//           <path
//             d="M133.737 8.09256L128.634 24.2777"
//             strokeWidth="2"
//             strokeLinecap="round"
//             className="illustration__accent"
//           />
//           <path
//             d="M123.093 13.6335L139.278 18.7367"
//             strokeWidth="2"
//             strokeLinecap="round"
//             className="illustration__accent"
//           />
//         </motion.g>
//         <motion.g clip-path="url(#clip1)" variants={shift}>
//           <path
//             d="M25.7367 181.093L20.6335 197.278"
//             strokeWidth="2"
//             strokeLinecap="round"
//             className="illustration__accent"
//           />
//           <path
//             d="M15.0926 186.634L31.2777 191.737"
//             strokeWidth="2"
//             strokeLinecap="round"
//             className="illustration__accent"
//           />
//         </motion.g>
//         <motion.g clip-path="url(#clip2)" variants={shift}>
//           <path
//             d="M214.737 122.093L209.634 138.278"
//             strokeWidth="2"
//             strokeLinecap="round"
//             className="illustration__accent"
//           />
//           <path
//             d="M204.093 127.634L220.278 132.737"
//             strokeWidth="2"
//             strokeLinecap="round"
//             className="illustration__accent"
//           />
//         </motion.g>
//         <motion.g clip-path="url(#clip3)" variants={shift}>
//           <path
//             d="M101.139 206.817L93.0463 209.368"
//             strokeWidth="2"
//             strokeLinecap="round"
//             className="illustration__accent"
//           />
//           <path
//             d="M95.8168 204.046L98.3683 212.139"
//             strokeWidth="2"
//             strokeLinecap="round"
//             className="illustration__accent"
//           />
//         </motion.g>
//         <defs>
//           <clipPath id="clip0">
//             <rect
//               width="24"
//               height="24"
//               transform="translate(115 11.082) rotate(-27.5)"
//             />
//           </clipPath>
//           <clipPath id="clip1">
//             <rect
//               width="24"
//               height="24"
//               transform="translate(7 184.082) rotate(-27.5)"
//             />
//           </clipPath>
//           <clipPath id="clip2">
//             <rect
//               width="24"
//               height="24"
//               transform="translate(196 125.082) rotate(-27.5)"
//             />
//           </clipPath>
//           <clipPath id="clip3">
//             <rect
//               width="12"
//               height="12"
//               transform="translate(94.541 200) rotate(27.5)"
//             />
//           </clipPath>
//         </defs>
//       </svg>
//       <h2>{successMessage}</h2>
//     </motion.div>
//   )
// }
