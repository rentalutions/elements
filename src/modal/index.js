import React, { useLayoutEffect } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { X } from "react-feather"
import PropTypes from "prop-types"
import { useTransition, animated, config } from "react-spring"
import { colors } from "../constants"
import { usePortal } from "../hooks"

const StyledModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  overflow-y: auto;
  .modal-body {
    position: relative;
    background: ${colors.ui_100};
    border-radius: 4px;
    padding: 2rem;
    width: 100%;
    max-width: 54rem;
    margin: 4rem auto;
  }
  .close {
    position: absolute;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
    transition: 200ms;
    &:hover {
      color: ${colors.ui_700};
    }
  }
`

const Modal = ({
  children, open, toggle, ...passedProps
}) => {
  const target = usePortal()
  const handleToggle = (e) => {
    if (e.target !== e.currentTarget) return
    toggle(e)
  }
  useLayoutEffect(() => {
    if (!document) return // return early if server rendering
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "initial"
    return () => {document.body.style.overflow = "initial"}
  }, [open])
  const animation = useTransition(open, null, {
    from: { opacity: 0, transform: "scale(1.1)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(1.1)" },
    config: config.stiff
  })
  return animation.map(({ item, key, props }) => {
    console.log(props)
    return item
      ? createPortal(
          <StyledModal
            {...passedProps}
            onClick={handleToggle}
            style={{ opacity: props.opacity }}
          >
            <animated.div key={key} className="modal-body" style={props}>
              <X className="close" onClick={e => toggle(e)} />
              {children}
            </animated.div>
          </StyledModal>,
          target
        )
      : null
  })
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

export default Modal
