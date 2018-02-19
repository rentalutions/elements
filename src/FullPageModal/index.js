import React, { Component, Children } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { sizing, colors } from "../variables"
import { Portal } from "react-portal"
import TransitionGroup from "react-transition-group/TransitionGroup"

function safeBind(cb) {
  return () => {
    if (this.mounted) {
      cb.call(this)
    }
  }
}
function Aux({ children }) { return children }

export default function FullPageModal({ show, onHide, children, className, BodyClassName, ...props }) {
  const Wrapper = BodyClassName ? BodyClassName : Aux;
  const propsForWrapper = BodyClassName ? { className: "full-page-modal-in" } : {}
  return (
    <TransitionGroup
      component={Aux}
      childFactory={child => (
        <ModalContainer
          onHide={onHide}
          {...props}
        >
          {child}
        </ModalContainer>
      )}
    >
      {
        show ?
          <Wrapper>
            <div className={["rnt-modal-body", className].filter(Boolean).join(" ")}>
              {children}
            </div>
          </Wrapper>
        :
          null
      }
    </TransitionGroup>
  )
}

class ModalContainer extends Component {
  state = { className: "" }

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    this.mounted = false
  }

  componentWillAppear(cb) {
    setTimeout(() => {
      this.safeSetState({ className: "in" }, this::safeBind(cb))
    }, 50)
  }

  componentWillEnter(cb) {
    this.componentWillAppear.call(this, this::safeBind(cb))
  }

  componentWillLeave(cb) {
    this.safeSetState({ className: "" }, () => {
      setTimeout(this::safeBind(cb), 200)
    })
  }

  render() {
    const { props, state } = this

    return (
      <Portal>
        <TransitionContainer className={state.className}>
          <svg className="svg-close" onClick={props.onHide} viewBox="0 0 36 36">
            <polygon
              fill={colors.darkGray}
              points="35.498 3.414 32.668 .586 18.084 15.172 3.498 .586 .668 3.414 15.254 18 .668 32.586 3.498 35.414 18.084 20.828 32.668 35.414 35.498 32.586 20.912 18"
            />
          </svg>
          <div className="scroll-container">
            {props.children}
          </div>
        </TransitionContainer>
      </Portal>
    )
  }

  safeSetState = (s, c) => {
    if (this.mounted) this.setState(s, c)
  }
}

const TransitionContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(249, 249, 249, 0.96);
  opacity: 0;
  transform: scale(1.25);
  transition: 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 4;

  &.in {
    opacity: 1;
    transform: none;
  }

  .svg-close {
    position: absolute;
    top: ${sizing}px;
    right: ${sizing}px;
    cursor: pointer;
    font-size: 2rem;
    height: ${sizing}px;
    width: ${sizing}px;
  }
  .scroll-container {
    box-sizing: border-box;
    overflow-y: auto;
    max-height: 100%;
    width: 100%;
    -webkit-overflow-scrolling: touch;
  }
  .rnt-modal-body {
    margin: 3.5em auto;
    box-sizing: border-box;
    padding-left: 1em;
    padding-right: 1em;
    @media (min-width:1080px) {
      margin: 0 auto;
      padding-top: 1em;
      padding-bottom: 1em;
    }
    max-width: ${sizing * 40}px;
    width: 100%;
  }
`
