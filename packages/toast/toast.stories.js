import { Fragment } from "react"
import { Box } from "@rent_avail/layout"
import { motion } from "framer-motion"
import { Loader } from "react-feather"
import { ToastProvider, useToast } from "./src"

export default {
  title: "Packages/Toast",
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
}

const buttonStyle = {
  appearance: "none",
  p: "1rem 2rem",
  borderRadius: "0.25rem",
  bg: "ui_300",
  border: "3px solid transparent",
  borderColor: "ui_500",
  color: "ui_700",
  font: "inherit",
  fontWeight: "black",
  cursor: "pointer",
}

export function BasicExample() {
  const toast = useToast()
  return (
    <Box
      onClick={() => toast.blank("I'm a basic toast.")}
      as="button"
      sx={buttonStyle}
    >
      Basic Toast
    </Box>
  )
}

export function SuccessExample() {
  const toast = useToast()
  return (
    <Box
      onClick={() => toast.success("I'm a success toast.")}
      as="button"
      sx={buttonStyle}
    >
      Success Toast
    </Box>
  )
}

export function ErrorExample() {
  const toast = useToast()
  return (
    <Box
      onClick={() => toast.error("I'm an error toast.")}
      as="button"
      sx={buttonStyle}
    >
      Error Toast
    </Box>
  )
}

export function CustomExample() {
  const toast = useToast()
  return (
    <Fragment>
      <Box
        as="button"
        sx={buttonStyle}
        onClick={() =>
          toast.blank((t) => {
            return (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <span>
                  Custom <strong>content</strong>.
                </span>
                <Box
                  sx={{ ml: "1rem" }}
                  as="button"
                  onClick={(e) => t.dismiss(t.id)}
                >
                  Dismiss
                </Box>
              </Box>
            )
          })
        }
      >
        Custom JSX Content
      </Box>
      <Box
        as="button"
        sx={buttonStyle}
        onClick={() =>
          toast.blank(() => (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              pariatur quos voluptas doloremque tenetur molestias laudantium,
              nam, et praesentium, exercitationem dolorum id numquam optio
              sapiente consectetur architecto tempore dolore quo!
            </span>
          ))
        }
      >
        Really Long Toast
      </Box>
    </Fragment>
  )
}

export function PromiseExample() {
  const toast = useToast()
  async function handleClick(evt) {
    // const fetchThing = fetch("https://api.github.com/users/timmywheels/repos")
    const promise = new Promise((res, rej) => {
      setTimeout(
        Math.random() > 0.5 ? () => res("Success") : () => rej("Custom Error"),
        3000
      )
    })
    await toast.promise(promise, {
      loading: "Loading...",
      success: (result) => result,
      error: (message) => `Error: ${message}`,
    })
  }
  return (
    <Box as="button" sx={buttonStyle} onClick={handleClick}>
      Loading Toast
    </Box>
  )
}
