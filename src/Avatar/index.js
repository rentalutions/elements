import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import theme, { sizing, colors } from "../variables"
import { Text } from "../index"

const Wrapper = styled.div`
  display: ${({ email, block }) =>
    !email && !block ? "inline-block" : "initial"};
  background-color: ${({ email }) => (email ? "transparent" : colors.ui)};
  border-radius: ${sizing}px;
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
    height: ${({ email, name, theme }) =>
    email || !name ? theme.sizing * 2 : theme.sizing / 2}px;
    width: ${({ email, name, theme }) =>
    email || !name ? theme.sizing * 2 : theme.sizing / 2}px;
    box-sizing: border-box;
    padding: ${sizing / 2}px;
    border-radius: 50%;
    font-size: 0.75em;
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
    width: ${({ theme }) => theme.sizing / 2}px;
    height: ${({ theme }) => theme.sizing / 2}px;
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
    padding: 0 ${({ theme }) => theme.sizing / 2}px;
    margin: ${({ theme }) => theme.sizing / 4}px;
    ${'' /* font-size: ${({ email }) => (email ? "1.5rem" : "0.75rem")}; */}
    ${'' /* font-weight: ${({ email }) => (email ? "600" : "500")}; */}
    max-width: ${({ phone, email }) => (email || phone ? "none" : "12em")};
  }
  .contact-info {
    flex: 0 0 100%;
    margin-top: 0.25em;
    font-size: 0.875em;
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
        {name && <Text subtitle={!!email} small={!email} className="name">{name}</Text>}
      </div>
      {email && (
        <div className="contact-info">
          <span className="email">
            {[email, phone].filter(Boolean).join(" | ")}
          </span>
        </div>
      )}
    </Wrapper>
  )

Avatar.propTypes = {
  block: PropTypes.bool,
  email: PropTypes.string,
  indicator: PropTypes.string,
  initials: PropTypes.string,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  phone: PropTypes.string,
  photo: PropTypes.string
}

Avatar.defaultProps = {
  theme
}

export default Avatar
