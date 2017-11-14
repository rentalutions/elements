import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const ProgressWrapper = styled.div`display: flex;`

const StepMarkup = props => (
  <div {...props}>
    <div className="bar" />
    {/* <div className="arrow" /> */}
    {props.title && <div className="title">{props.title}</div>}
  </div>
)

const ProgressStep = styled(StepMarkup)`
  position: relative;
  flex: 1;
  display: flex;
  &:first-of-type .bar {
    border-radius: 12px 0 0 12px;
    clip-path: polygon(
      calc(100% - 12px) 0%,
      100% 50%,
      calc(100% - 12px) 100%,
      0% 100%,
      0% 0%
    );
  }
  &:last-of-type .bar {
    border-radius: 0 12px 12px 0;
    clip-path: polygon(100% 0, 100% 99%, 0% 100%, 12px 50%, 0% 0%);
  }
  &:not(:first-of-type):not(:last-of-type) .bar {
    clip-path: polygon(
      calc(100% - 12px) 0%,
      100% 50%,
      calc(100% - 12px) 100%,
      0% 100%,
      12px 50%,
      0% 0%
    );
  }
  .bar {
    flex: 1;
    background: ${({ complete }) => (complete ? "#137bb5" : "#f2f2f2")};
    height: 24px;
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
