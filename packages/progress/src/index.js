import React from "react"
import styled from "styled-components"

export function FixedProgress({ steps, ...props }) {
  return (
    <StyledFixed {...props}>
      {Object.keys(steps).map((step) => (
        <div key={step} className={`step ${steps[step] && "complete"}`}>
          <p className="small label">{step}</p>
        </div>
      ))}
    </StyledFixed>
  )
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
    background: ${({ theme }) => theme.colors.ui_500};
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
    background: ${({ theme }) => theme.colors.blue_500};
  }
`
export function FluidProgress({ label, current, total, ...props }) {
  return (
    <StyledFluid {...props}>
      <div className="track">
        <div
          className="progress"
          style={{ width: `${(current / total) * 100}%` }}
        />
        <p className="steps">{`${current} / ${total}`}</p>
      </div>
      {label && <p className="small label">{label}</p>}
    </StyledFluid>
  )
}

const StyledFluid = styled.section`
  .track {
    position: relative;
    height: 2rem;
    background: ${({ theme }) => theme.colors.ui_500};
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
    background: ${({ theme }) => theme.colors.green_500};
    border-radius: 1rem;
    transition: 200ms;
  }
  .label {
    margin-top: 1rem;
  }
`
