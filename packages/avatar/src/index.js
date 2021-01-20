import React, { forwardRef } from "react"
import { Box } from "@rent_avail/layout"

function AvatarGroup({ sx = {}, clipColor = "ui_100", ...props }) {
  return (
    <Box
      {...props}
      sx={{
        ...sx,
        display: "inline-flex",
        "& > *": {
          borderColor: clipColor,
          borderWidth: "0.25rem",
          borderStyle: "solid",
        },
        "& > *:not(:first-of-type)": { ml: "-1rem" },
      }}
    />
  )
}

const defaultPhoto =
  "https://rentalutions-assets.s3.amazonaws.com/avatars/not-found.svg"

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
  const isDefault = photo === defaultPhoto
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
            bg: "ui_500",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            as="span"
            className="avatar__name"
            sx={{
              overflow: "hidden",
              overflowWrap: "anywhere",
              wordBreak: email ? "break-all" : "normal",
              // This is kind of a hack but works in every major browser except IE
              display: "-webkit-box",
              "-webkit-line-clamp": email ? "1" : "2",
              "-webkit-box-orient": "vertical",
            }}
          >
            {name}
          </Box>
          {email && (
            <Box
              as="span"
              className="avatar__email"
              sx={{
                overflow: "hidden",
                color: "ui_700",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {email}
            </Box>
          )}
        </Box>
        {icon && (
          <Box
            as={icon}
            sx={{ alignSelf: "center", flexShrink: 0, ml: "1rem" }}
          />
        )}
      </Box>
    )
  }
  return (
    <Box
      {...props}
      ref={ref}
      role="figure"
      sx={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: "5rem",
        height: "5rem",
        borderRadius: "4rem",
        p: "1rem",
        text: ["small"],
        overflow: "hidden",
        bg: "ui_300",
        backgroundImage: !isDefault ? `url(${photo})` : "",
        ...sx,
      }}
    >
      {isDefault && initials}
    </Box>
  )
})

export { Avatar, AvatarGroup }
