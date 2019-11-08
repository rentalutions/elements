import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { colors } from "src/constants"

const StyledProp = styled.section`
  position: relative;
  .prop__line {
    display: flex;
    padding-bottom: 1rem;
    border-bottom: 2px solid ${colors.ui_300};
    code {
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      letter-spacing: 0.5px;
    }
    > *:not(:last-of-type) {
      margin-right: 2rem;
    }
    .name {
      background: ${colors.blue_100};
      color: ${colors.blue_500};
    }
    .type {
      background: ${colors.ui_300};
      color: ${colors.ui_700};
    }
    .required {
      color: ${colors.red_500};
    }
    .default {
      color: ${colors.ui_500};
      margin-left: -1rem;
    }
  }
  .prop__description {
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
`

export default function Prop({ name, type, defaultValue, required, children, ...props }) {
  return (
    <StyledProp {...props}>
      <h5 className="prop__line">
        <code className="name">{name}</code>
        <code className="type">{type}</code>
        {defaultValue && <code className="default">= {defaultValue}</code>}
        {required && !defaultValue && <code className="required">required</code>}
      </h5>
      <div className="prop__description">{children}</div>
    </StyledProp>
  )
}
