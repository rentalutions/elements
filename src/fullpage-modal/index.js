import React, { useEffect } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { useTransition, animated, config } from "react-spring"
import PropTypes from "prop-types"
import { X } from "react-feather"
import { colors } from "src/constants"
import { usePortal } from "src/hooks"
import Container from "src/container"

const StyledFullPageModal = styled(animated.section)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.96);
  z-index: 1000;
  padding: 4rem 2rem;
  overflow-y: auto;
  .close {
    position: absolute;
    top: 4rem;
    right: 4rem;
    cursor: pointer;
    transition: 200ms;
    &:hover {
      color: ${colors.ui_700};
    }
  }
`

const FullPageModal = ({ children, open, toggle, ...passedProps }) => {
  const target = usePortal()
  const animation = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff
  })
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "initial"
    return () => {
      document.body.style.overflow = "initial"
    }
  }, [open])
  return target
    ? createPortal(
        animation.map(({ item, key, props }) => {
          return item ? (
            <StyledFullPageModal {...passedProps} key={key} style={props}>
              <X className="close" onClick={e => toggle(e)} />
              <Container>{children}</Container>
            </StyledFullPageModal>
          ) : null
        }),
        target
      )
    : null
}

FullPageModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

export default FullPageModal
