import React, { Children, PureComponent } from "react"
import { Route, NavLink, withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  .step-list {
    margin: 0;
    padding: 1em;
    list-style: none;
    width: 100%;
    max-width: 15em;
    li {
      margin-bottom: 1em;
      a {
        text-decoration: none;
      }
    }
  }
  .steps-container {
    flex: 1;
  }
`

export const Step = styled.div`
  padding: 1em;
  background-color: #f9f9f9;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
`

Step.displayName = "Step"

Step.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired
}

class Stepper extends PureComponent {
  state = {
    steps: [],
    activeStep: null
  }
  componentDidMount() {
    this.setState(state => {
      const steps = Children.toArray(this.props.children).filter(
        child => (child.type.displayName = "Step")
      )
      const activeStep = steps.reduce((active, step) => {
        if (step.props.path === this.props.initialStep)
          return (active = step.props.path)
        return active
      }, steps[0].props.path)
      return {
        steps,
        activeStep
      }
    })
  }
  render = _ => {
    const { steps, activeStep } = this.state
    console.log(this.props.match)
    return (
      <Wrapper>
        {window.innerWidth > 720 ? (
          [
            <ul className="step-list">
              {steps.map(({ props: { path, title } }) => (
                <li>
                  <NavLink
                    to={`/${path}`}
                    onClick={e => this.setState({ activeStep: path })}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>,
            <section className="steps-container">
              {steps.map(
                ({ props: { children, ...props } }) =>
                  props.path === activeStep ? (
                    <Step className="step" active={props.path === activeStep}>
                      {children}
                    </Step>
                  ) : null
              )}
            </section>
          ]
        ) : (
          <h1>hello world</h1>
        )}
      </Wrapper>
    )
  }
}

export default withRouter(Stepper)
