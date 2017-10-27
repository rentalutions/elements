import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const ProgressWrapper = styled.div``

const ProgressStep = styled.div``

const ProgressBar = props => (
  <ProgressWrapper>
    {props.steps.map(step => <ProgressStep title={step.title} />)}
  </ProgressWrapper>
)

ProgressBar.displayName = "ProgressBar"

ProgressBar.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object),
  currentStep: PropTypes.number,
  complete: PropTypes.bool
}

export default ProgressBar
