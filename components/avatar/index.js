import React from "react"
import styled from "styled-components"

const StyledAvatar = styled.div``

export default function Avatar({
  size = "md",
  name = "",
  photo_url = null,
  initials = null,
  email = null,
  phone = null
}) {
  if (size === "sm")
    return (
      <StyledAvatar>
        <p className="initials">{initials}</p>
      </StyledAvatar>
    )
  if (size === "lg")
    return (
      <StyledAvatar>
        <img src={photo_url} alt={`${name}'s profile photo`} className="profile-photo" />
        <h2>{name}</h2>
        <p>
          {email} | {phone}
        </p>
      </StyledAvatar>
    )
  return (
    <StyledAvatar>
      <img
        src={info.photo_url}
        alt={`${name}'s profile photo`}
        className="profile-photo"
      />
      <p>{name}</p>
    </StyledAvatar>
  )
}
