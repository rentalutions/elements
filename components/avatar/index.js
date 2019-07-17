import React from "react"
import styled, { css } from "styled-components"
import { colors } from "../constants"

const smallStyles = css`
  width: 4rem;
  > *:not(.initials) {
    display: none;
  }
`

const StyledAvatar = styled.div`
  position: relative;
  padding: 1rem 2rem 1rem 1rem;
  border-radius: 2rem;
  background: ${colors.grey_300};
  display: inline-flex;
  align-items: center;
  height: 4rem;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
    margin: 0;
    padding: 0;
  }
  .name {
    margin-left: 1rem;
  }
  ${({ small }) => small && smallStyles}
`

export default function Avatar({ small, name = "", photo_url = null, initials = "" }) {
  if (small)
    return (
      <StyledAvatar small>
        <p className="initials">{initials}</p>
      </StyledAvatar>
    )
  return (
    <StyledAvatar>
      <img src={photo_url} alt={`${name}'s profile photo`} className="profile-photo" />
      <span className="name">{name}</span>
    </StyledAvatar>
  )
}

export const AvatarGroup = styled.div`
  display: flex;
  > * {
    margin-left: -1rem;
  }
`
