import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { colors } from "../constants"

const smallStyles = css`
  width: 4rem;
  padding-right: initial;
  > *:not(.initials) {
    display: none;
  }
`

const propTypes = {
  small: PropTypes.bool,
  name: PropTypes.string,
  photoUrl: (props, name) => {
    if (!props.small && typeof props[name] === "undefined") {
      return new Error("Photo URL required if not small.")
    }
  },
  initials: (props, name, componentName) => {
    if (props.small && typeof props[name] === "undefined") {
      return new Error(
        `Please provide intials if ${componentName} has small prop`
      )
    }
  },
  email: PropTypes.string,
  icon: PropTypes.node,
}

const defaultProps = {
  small: false,
  name: null,
  initials: null,
  email: null,
  icon: null,
  photoUrl: null,
}

const StyledAvatar = styled.div`
  position: relative;
  border-radius: 2rem;
  background: ${colors.ui_300};
  display: inline-flex;
  align-items: center;
  height: 4rem;
  padding-right: 2rem;
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

export default function Avatar({
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

Avatar.propTypes = propTypes

Avatar.defaultProps = defaultProps

export const AvatarGroup = styled.div`
  display: flex;
  > *:not(:first-of-type) {
    margin-left: -1rem;
  }
`
