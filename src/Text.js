import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextWrapper = styled.span`
  .text, .small, .title, .headline, .hero {
    margin: 1rem 0;
    padding: 0;
    color: #404040;
    font-family: 'Open Sans';
  }
  .text { font-size: 1rem; }
  .small { font-size: 0.75rem; }
  .hero {
    font-size: 3rem;
    font-weight: 300;
  }
  .headline { font-size: 2rem; }
  .title {
    font-size: 1.25rem;
    font-weight: 600;
  }
`

export default function Text ({
  children,
  small,
  title,
  headline,
  hero,
  className
}) {
  return (
    <TextWrapper className={className}>
      {
        hero ? <h1 className="hero">{children}</h1>
        : headline ? <h2 className="headline">{children}</h2>
        : title ? <h3 className="title">{children}</h3>
        : small ? <p className="small">{children}</p>
        : <p className="text">{children}</p>
      }
    </TextWrapper>
  )
}

Text.propTypes = {
  hero: PropTypes.bool,
  headline: PropTypes.bool,
  title: PropTypes.bool,
  small: PropTypes.bool,
  color: PropTypes.string
}

Text.defaultProps = {
  hero: false,
  headline: false,
  title: false,
  small: false,
  color: ''
}
