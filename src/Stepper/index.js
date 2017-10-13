import React, { Children, PureComponent } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const Wrapper = styled.div`
  .step-list {
  }
  .step-content {
  }
`
const stepActive = css`display: block;`
const stepInactive = css`display: none;`

export const Step = styled.div`
  ${({ active }) => (active ? stepActive : stepInactive)};
`

Step.displayName = "Step"

Step.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default class Stepper extends PureComponent {
  render = _ => (
    <Wrapper>
      <ul className="step-list">
        {Children.map(
          this.props.children,
          child =>
            child.type.displayName === "Step" && <li>{child.props.title}</li>
        )}
      </ul>
      <div className="step-content">
        {Children.map(
          this.props.children,
          child => (child.type.displayName = "Step") && child
        )}
      </div>
    </Wrapper>
  )
}
