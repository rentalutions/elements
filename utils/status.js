import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { colors } from "src/constants"

const StyledStatus = styled.span`
  margin-top: 2rem;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  font-size: 1.5rem;
  line-height: 1.334;
  &.production {
    background: ${colors.blue_500};
    color: ${colors.ui_100};
  }
  &.beta {
    background: ${colors.gold_500};
  }
  &.alpha {
    background: ${colors.straw_500};
  }
  &.deprecated {
    background: ${colors.red_500};
  }
`

export default function Status({ status = "production", className, ...props }) {
  return (
    <StyledStatus className={`${className} ${status}`} {...props}>
      {status}
    </StyledStatus>
  )
}

Status.propTypes = {
  status: PropTypes.oneOf(
    PropTypes.arrayOf(["production", "beta", "alpha", "deprecated"])
  )
}
