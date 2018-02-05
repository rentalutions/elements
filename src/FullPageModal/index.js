import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { sizing, colors } from "../variables"

const ModalContainer = styled(({ show, ...rest }) => <div {...rest} />)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: ${({ top }) => (top ? "flex-start" : "center")};
  background: rgba(249, 249, 249, 0.96);
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: ${({ show }) => (show ? "scale(1)" : "scale(1.25)")};
  transition: 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
    display: flex;
    padding: ${sizing / 2}px;
    overflow-y: auto;
    max-height: 100%;
    width: 100%;
    @media (min-width: ${sizing * 40}px) {
      padding: 0 ${sizing}px;
    }
  }
  .rnt-modal-body {
    margin: 0 auto;
    max-width: ${sizing * 40}px;
    width: 100%;
  }
`

const FullPageModal = ({ show, onHide, top = false, children, ...props }) => (
  <ModalContainer {...props} show={show}>
    <svg className="svg-close" onClick={onHide} viewBox="0 0 36 36">
      <polygon
        fill={colors.darkGray}
        points="35.498 3.414 32.668 .586 18.084 15.172 3.498 .586 .668 3.414 15.254 18 .668 32.586 3.498 35.414 18.084 20.828 32.668 35.414 35.498 32.586 20.912 18"
      />
    </svg>
    <div className="scroll-container">
      <div className="rnt-modal-body">{children}</div>
    </div>
  </ModalContainer>
)

FullPageModal.propTypes = {
  show: PropTypes.bool.isRequired,
  top: PropTypes.bool,
  onHide: PropTypes.func.isRequired
}

export default FullPageModal
