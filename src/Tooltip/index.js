import React, { PureComponent } from "react"
import styled from "styled-components"
import { colors, sizing } from "../variables"

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
  &:hover .tool-tip {
    visibility: visible;
    opacity: 1;
  }
  .tool-tip {
    position: absolute;
    top: 0;
    left: calc(100% + ${sizing / 2}px);
    padding: ${sizing / 2}px;
    background-color: ${colors.dark};
    border-radius: 2px;
    color: ${colors.light};
    visibility: hidden;
    opacity: 0;
    transition: 200ms;
    width: 100%;
    max-width: ${sizing * 30}px;
  }
`

class Tooltip extends PureComponent {
  state = {
    bounding: {}
  }
  updateBounding = () => {
    this.setState({ bounding: this.node.getBoundingClientRect() })
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateBounding)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateBounding)
  }
  render() {
    const { top, right, bottom, left } = this.state.bounding
    return (
      <Wrapper top={top} right={right} bottom={bottom} left={left}>
        {this.props.children}
        <div className="tool-tip" ref={node => (this.node = node)}>
          {this.props.content}
          <p>{top}</p>
        </div>
      </Wrapper>
    )
  }
}

export default Tooltip
