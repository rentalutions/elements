import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { colors } from "../constants"

const smallStyles = css`
  width: 4rem;
  > *:not(.initials) {
    display: none;
  }
`

const StyledAvatar = styled.div`
  position: relative;
  border-radius: 2rem;
  background: ${colors.ui_300};
  display: inline-flex;
  align-items: center;
  height: 4rem;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 0.5rem;
    padding: 0;
  }
  .name {
    margin-left: 1rem;
    margin-right: 2rem;
    overflow: hidden;
    max-width: 20rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .initials {
    text-align: center;
    width: 100%;
  }
  ${({ small }) => small && smallStyles}
`

export default function Avatar({
  small, name, email, photoUrl, initials, icon: Icon
}) {
  if (small) {
    return (
      <StyledAvatar small>
        <p className="initials">{initials.substring(0, 2)}</p>
      </StyledAvatar>
    )
  }
  return (
    <StyledAvatar>
      <img src={photoUrl} alt={`${name}'s profile shot`} className="profile-photo" />
      <span className="name">{name || email}</span>
      {Icon && <Icon />}
    </StyledAvatar>
  )
}

Avatar.propTypes = {
  /** Adjust the size of an avatar. Small removes the need for photos or names. */
  small: PropTypes.bool,
  /** User name, used in place of an email if present */
  name: PropTypes.string,
  /** User profile photo. Icon used by default */
  photoUrl: PropTypes.string,
  initials: PropTypes.string,
  email: PropTypes.string,
  icon: PropTypes.element
}

Avatar.defaultProps = {
  small: false,
  name: null,
  photoUrl: null,
  initials: null,
  email: null,
  icon: null
}

export const AvatarGroup = styled.div`
  display: flex;
  > * {
    margin-left: -1rem;
  }
`
