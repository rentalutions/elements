import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { sizing, colors } from "../variables"
import { Text } from "../index"

const Wrapper = styled.div`
  ${({ email, block }) => !email && !block ? "display: inline-block;" : null}
  background-color: ${({ email }) => (email ? "transparent" : colors.ui)};
  border-radius: ${sizing}px;
  color: ${colors.dark};
  .photo-name-area {
    display: flex;
    align-items: center;
  }
  .photo-area {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: ${({ email, name }) =>
      email || !name ? `${sizing * 2}px` : `${sizing / 2}px`};
    width: ${({ email, name }) =>
      email || !name ? `${sizing * 2}px` : `${sizing / 2}px`};
    box-sizing: border-box;
    padding: ${sizing / 2}px;
    border-radius: 50%;
    font-size: 0.875em;
    font-weight: 600;
    text-transform: uppercase;
    background-color: ${colors.lightGray};
    background-image: ${({ photo }) => (photo ? `url(${photo})` : "")};
    background-repeat: no-repeat;
    background-size: cover;
  }
  .indicator {
    position: absolute;
    bottom: -0.05em;
    right: -0.05em;
    box-sizing: border-box;
    width: ${sizing / 2}px;
    height: ${sizing / 2}px;
    background: ${({ indicator }) => indicator && indicator};
    border: 2px solid ${colors.light};
    border-radius: 50%;
  }
  .name,
  .contact-info {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .name {
    padding: 0 ${sizing / 2}px;
    line-height: 1;
    font-size: ${({ email }) => (email ? "1.5rem" : "0.875rem")};
    font-weight: ${({ email }) => (email ? "600" : "500")};
  }
  .contact-info {
    flex: 0 0 100%;
    padding: ${sizing / 2}px 0;
    font-size: 0.875rem;
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
    <div className="photo-name-area">
      <div className="photo-area">
        {name || photo ? null : initials}
        {indicator && <span className="indicator" />}
      </div>
      {name && <span className="name">{name}</span>}
    </div>
    {email && (
      <div className="contact-info">
        <span className="email">
          {[email,phone].filter(Boolean).join(" | ")}
        </span>
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
