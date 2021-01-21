import { Fragment } from "react"
import { Box } from "@rent_avail/layout"
import { ToastProvider, useToast } from "./src"

export default {
  title: "Toast",
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

export function Default() {
  const toast = useToast()
  return (
    <Box
      onClick={(e) => toast("I'm a basic toast.")}
      as="button"
      sx={buttonStyle}
    >
      Basic Toast
    </Box>
  )
}

export function Success() {
  const toast = useToast()
  return (
    <Box
      onClick={(e) => toast.success("I'm a success toast.")}
      as="button"
      sx={buttonStyle}
    >
      Success Toast
    </Box>
  )
}

export function Error() {
  const toast = useToast()
  return (
    <Box
      onClick={(e) => toast.error("I'm an error toast.")}
      as="button"
      sx={buttonStyle}
    >
      Error Toast
    </Box>
  )
}

export function CustomJSX() {
  const toast = useToast()
  return (
    <Fragment>
      <Box
        as="button"
        sx={buttonStyle}
        onClick={(e) =>
          toast((t) => {
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
        onClick={(e) =>
          toast(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam pariatur quos voluptas doloremque tenetur molestias laudantium, nam, et praesentium, exercitationem dolorum id numquam optio sapiente consectetur architecto tempore dolore quo!"
          )
        }
      >
        Really Long Toast
      </Box>
    </Fragment>
  )
}
