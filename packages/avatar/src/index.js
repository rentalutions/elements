import React, { forwardRef } from "react"
import { Box } from "@rent_avail/core"

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
  "https://prod-avail-assets.s3.amazonaws.com/avatars/not-found.svg"

const Avatar = forwardRef(function Avatar(
  {
    photo = defaultPhoto,
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
          borderRadius: "4rem",
          maxWidth: "25rem",
          ...sx,
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            width: "4rem",
            height: "4rem",
            flex: "0 0 auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {initials ? (
            <Box as="span">{initials}</Box>
          ) : (
            <Box
              as="img"
              src={photo}
              sx={{
                objectFit: "cover",
                bg: "ui_500",
                width: "4rem",
                aspectRatio: "1/1",
                borderRadius: "2rem",
                display: "block",
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            display: name || email ? "flex" : "none",
            flexDirection: "column",
            justifyContent: "center",
            mr: "1.5rem",
            overflow: "hidden",
            overflowWrap: "anywhere",
          }}
        >
          {name && (
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
          )}
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
            sx={{ alignSelf: "center", flexShrink: 0, mr: "1rem" }}
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
        backgroundImage: initials || isDefault ? "" : `url(${photo})`,
        ...sx,
      }}
    >
      {initials && initials}
    </Box>
  )
})

export { Avatar, AvatarGroup }
