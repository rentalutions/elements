import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors } from "../constants"

/**
 *
 * @param {object} steps - An object of with a key of the step title and a boolean complete.
 */
export function FixedProgress({ steps, ...props }) {
  return (
    <StyledFixed {...props}>
      {Object.keys(steps).map(step => (
        <div key={step} className={`step ${steps[step] && "complete"}`}>
          <p className="small label">{step}</p>
        </div>
      ))}
    </StyledFixed>
  )
}

FixedProgress.propTypes = {
  steps: PropTypes.objectOf(PropTypes.bool).isRequired
}

const StyledFixed = styled.div`
  display: flex;
  .step {
    flex: 1;
  }
  .step::before {
    content: "";
    display: block;
    height: 2rem;
    width: 100%;
    background: ${colors.ui_500};
    margin-bottom: 1rem;
    clip-path: polygon(
      calc(100% - 1rem) 0%,
      100% 50%,
      calc(100% - 1rem) 100%,
      0% 100%,
      1rem 50%,
      0% 0%
    );
  }
  .step:first-of-type::before {
    border-radius: 1rem 0 0 1rem;
    clip-path: polygon(
      0% 0%,
      calc(100% - 1rem) 0%,
      100% 50%,
      calc(100% - 1rem) 100%,
      0% 100%
    );
  }
  .step:last-of-type::before {
    border-radius: 0 1rem 1rem 0;
    clip-path: polygon(100% 0, 100% 100%, 0% 100%, 1rem 50%, 0% 0%);
  }
  .step.complete::before {
    background: ${colors.blue_500};
  }
`
/**
 * FluidProgress Props
 * @typedef {object} FluidProgressProps
 * @prop {string} label - Label for the current step.
 * @prop {number} current - Number of the current step.
 * @prop {number} total - Length of total number of steps.
 */

/**
 * Fluid Progress Bar
 * @param {FluidProgressProps} props
 */
export function FluidProgress({ label, current, total, ...props }) {
  return (
    <StyledFluid {...props}>
      <div className="track">
        <div className="progress" style={{ width: `${(current / total) * 100}%` }} />
        <p className="steps">{`${current} / ${total}`}</p>
      </div>
      <p className="small label">{label}</p>
    </StyledFluid>
  )
}

FluidProgress.propTypes = {
  label: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

const StyledFluid = styled.section`
  .track {
    position: relative;
    height: 2rem;
    background: ${colors.ui_500};
    border-radius: 1rem;
  }
  .steps {
    position: absolute;
    right: 1rem;
    top: 0;
    line-height: 2rem;
  }
  .progress {
    height: 100%;
    background: ${colors.green_500};
    border-radius: 1rem;
    transition: 200ms;
  }
  .label {
    margin-top: 1rem;
  }
`
