import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const ProgressWrapper = styled.div`display: flex;`

const StepMarkup = ({ className, title, complete, current }) => (
  <div className={className} current complete>
    <div className="bar" />
    {title && <div className="title">{title}</div>}
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
    background: ${({ complete, current }) =>
      complete ? "#137bb5" : current ? "#9EA8B2" : "#f2f2f2"};
    height: 24px;
  }
  .title {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    font-size: 0.75rem;
  }
`

const ProgressTracker = ({ children }) => (
  <ProgressWrapper>{children}</ProgressWrapper>
)

ProgressTracker.displayName = "ProgressTracker"

ProgressStep.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object),
  complete: PropTypes.bool
}

export { ProgressTracker, ProgressStep }
