import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { sizing, colors } from "../variables"
import { Text } from "../index"

const Wrapper = styled.div`
  display: ${({ email, phone, block }) =>
    block || email ? "flex" : "inline-flex"};
  flex-wrap: wrap;
  background-color: ${({ email }) => (email ? "transparent" : colors.ui)};
  align-items: center;
  border-radius: ${sizing}px;
  color: ${colors.dark};
  .photo-area {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: ${sizing / 2}px;
    background: ${({ photo }) => (photo ? `url(${photo}` : colors.lightGray)};
    border-radius: 50%;
    font-size: 0.75rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    height: ${({ email, name }) =>
      email || !name ? `${sizing * 2}px` : `${sizing / 2}px`};
    width: ${({ email, name }) =>
      email || !name ? `${sizing * 2}px` : `${sizing / 2}px`};
  }
  .indicator {
    position: absolute;
    bottom: -0.05em;
    right: -0.05em;
    width: ${sizing / 2}px;
    height: ${sizing / 2}px;
    background: ${({ indicator }) => indicator && indicator};
    border: 2px solid ${colors.light};
    border-radius: 50%;
  }
  .name {
    margin: 0 ${sizing / 2}px;
    font-size: ${({ email }) => (email ? "1.5rem" : "0.75rem")};
    font-weight: ${({ email }) => (email ? "600" : "500")};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 7.5em;
  }
  .contact-info {
    display: flex;
    width: 100%;
    padding: ${sizing / 2}px 0;
    font-size: 0.75rem;
    color: ${colors.darkGray};
  }
`

const Avatar = ({
  className,
  block,
  email,
  indicator,
  initials,
  name,
  phone,
  photo,
  ...rest
}) => (
  <Wrapper
    block={block}
    name={name}
    email={email}
    className={className}
    indicator={indicator}
    photo={photo}
    {...rest}
  >
    <div className="photo-area">
      {name ? null : initials}
      {indicator && <span className="indicator" />}
    </div>
    {name && <span className="name">{name}</span>}
    {email && (
      <div className="contact-info">
        <span className="email">{email}</span>
        {phone && <span> | {phone}</span>}
      </div>
    )}
  </Wrapper>
)

Avatar.propTypes = {
  block: PropTypes.bool,
  email: PropTypes.string,
  indicator: PropTypes.string,
  initials: PropTypes.string.isRequired,
  name: PropTypes.string,
  phone: PropTypes.string,
  photo: PropTypes.string
}

export default Avatar
