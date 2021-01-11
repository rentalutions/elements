import React, { forwardRef } from "react"
import { Box } from "@rent_avail/layout"

function AvatarGroup({ sx = {}, ...props }) {
  return (
    <Box
      {...props}
      sx={{
        ...sx,
        display: "flex",
        "& > *:not(:first-of-type)": { ml: "-1rem" },
      }}
    />
  )
}

const Avatar = forwardRef(function Avatar(
  {
    photo = "https://rentalutions-assets.s3.amazonaws.com/avatars/not-found.svg",
    name,
    email,
    size = "large",
    initials,
    icon,
    sx = {},
    ...props
  },
  ref
) {
  if (size === "large") {
    return (
      <Box
        {...props}
        ref={ref}
        role="figure"
        sx={{
          display: "inline-flex",
          gap: "1rem",
          bg: "ui_300",
          p: "0.5rem",
          pr: "2rem",
          borderRadius: "4rem",
          maxWidth: "25rem",
          "& .avatar__email, & .avatar__name": {
            overflow: "hidden",
          },
          "& .avatar__email": {
            color: "ui_700",
            textOverflow: "ellipsis",
          },
          "& .avatar__name": {
            overflowWrap: "anywhere",
            wordBreak: email ? "break-all" : "normal",
            display: "-webkit-box",
            "-webkit-line-clamp": email ? "1" : "2",
            "-webkit-box-orient": "vertical",
          },
          ...sx,
        }}
      >
        <Box
          as="img"
          src={photo}
          sx={{
            width: "4rem",
            height: "4rem",
            borderRadius: "2rem",
            flex: "0 0 auto",
            objectFit: "cover",
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <span className="avatar__name">{name}</span>
          {email && <span className="avatar__email">{email}</span>}
        </Box>
        {icon && <Box as={icon} />}
      </Box>
    )
  }
  return (
    <Box
      {...props}
      ref={ref}
      role="figure"
      sx={{
        display: "flex",
        textAlign: "center",
        width: "4rem",
        borderRadius: "4rem",
        bg: "ui_300",
        p: "1rem",
        ...sx,
      }}
    >
      {initials}
    </Box>
  )
})

export { Avatar, AvatarGroup }
