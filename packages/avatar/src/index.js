import React from "react"
import styled, { css } from "styled-components"
import { space, layout, flexbox } from "styled-system"

const smallStyles = css`
  width: 4rem;
  padding-right: initial;
  > *:not(.initials) {
    display: none;
  }
`

const StyledAvatar = styled.div.attrs({
  role: "user-chip"
})`
  position: relative;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.ui_300};
  display: inline-flex;
  align-items: center;
  height: 4rem;
  padding-right: 2rem;
  ${space};
  ${layout};
  ${flexbox};
  img {
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 0.5rem;
  }
  .name {
    margin-left: 1rem;
    overflow: hidden;
    max-width: 20rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 24px;
  }
  .initials {
    text-align: center;
    width: 100%;
  }
  .icon {
    margin-left: 2rem;
  }
  ${({ small }) => small && smallStyles}
`

export function Avatar({
  small,
  name,
  email,
  photoUrl,
  initials,
  icon: Icon,
  ...props
}) {
  if (small) {
    return (
      <StyledAvatar small {...props}>
        <p className="initials">{initials.substring(0, 2)}</p>
      </StyledAvatar>
    )
  }
  return (
    <StyledAvatar {...props}>
      <img
        src={photoUrl}
        alt={`${name}'s profile shot`}
        className="profile-photo"
      />
      <span className="name">{name || email}</span>
      {Icon && <Icon className="icon" />}
    </StyledAvatar>
  )
}

export const AvatarGroup = styled.div`
  display: flex;
  > *:not(:first-of-type) {
    margin-left: -1rem;
  }
`
