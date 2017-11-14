import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const ProgressWrapper = styled.div`display: flex;`

const StepMarkup = props => (
  <div {...props}>
    <div className="bar" />
    <div className="arrow" />
    {props.title && <div className="title">{props.title}</div>}
  </div>
)

const ProgressStep = styled(StepMarkup)`
  position: relative;
  flex: 1;
  display: flex;
  &:first-of-type .bar {
    border-radius: 12px 0 0 12px;
  }
  &:last-of-type {
    .bar {
      border-radius: 0 12px 12px 0;
    }
    .arrow {
      display: none;
    }
  }
  &:not(:first-of-type) .bar {
    clip-path: polygon(100% 0, 100% 100%, 0% 100%, 12px 50%, 0% 0%);
  }
  .bar,
  .arrow {
    background: ${({ complete }) => (complete ? "#137bb5" : "#f2f2f2")};
    height: 24px;
  }
  .bar {
    flex: 1;
  }
  .arrow {
    width: 12px;
    clip-path: polygon(0 0, 0 100%, 99% 50%);
  }
  .title {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    font-size: 0.75rem;
  }
`

const ProgressBar = ({ steps = [] }) => (
  <ProgressWrapper>
    {steps.map(step => (
      <ProgressStep title={step.title} complete={step.complete} />
    ))}
  </ProgressWrapper>
)

ProgressBar.displayName = "ProgressBar"

ProgressBar.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object),
  currentStep: PropTypes.number,
  complete: PropTypes.bool
}

export default ProgressBar
