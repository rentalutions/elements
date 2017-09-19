import React, { PureComponent } from "react"
import styled from "styled-components"
import { sizing, colors } from "../variables"

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${sizing / 2}px;
  background: rgba(249, 249, 249, 0.96);
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transform: ${({ open }) => (open ? "scale(1)" : "scale(1.25)")};
  transition: 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  .rnt-close {
    position: absolute;
    top: ${sizing}px;
    right: ${sizing}px;
    cursor: pointer;
    font-size: 2rem;
    height: ${sizing}px;
    width: ${sizing}px;
    background-color: ${colors.dark};
  }
  .rnt-modal-body {
    padding: 0 ${sizing}px;
    max-width: ${sizing * 40}px;
    max-height: 100%;
    overflow: auto;
    width: 100%;
  }
  @media (min-width: ${sizing * 30}px) {
    padding: 0 ${sizing}px;
  }
`

export default class FullPageModal extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }
  toggleModal(e) {
    e.preventDefault()
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <div>
        {this.props.children(this.toggleModal)}
        <ModalContainer open={this.state.open}>
          <span className="rnt-close" onClick={this.toggleModal} />
          <div className="rnt-modal-body">{this.props.modalBody}</div>
        </ModalContainer>
      </div>
    )
  }
}
