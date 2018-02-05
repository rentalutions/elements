import React, { Children, Component, cloneElement } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

export default class Form extends Component {
  static propTypes = {
    onStateChange: PropTypes.func
  }
  state = {}
  componentDidMount = _ => {
    Children.forEach(this.props.children, child => {
      if (child.type.displayName === "Field")
        this.setState({ [child.props.name]: "" })
    })
  }
  handleOnChange = e => {
    const eventTarget = e.target
    const eventName = eventTarget.name
    const eventValue = eventTarget.value
    this.setState(state => {
      const newState = { ...state, [eventName]: eventValue }
      if (this.props.onStateChange) this.props.onStateChange(newState)
      return newState
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    if (this.props.onSubmit) this.props.onSubmit(this.state)
  }
  render = _ => (
    <form onSubmit={this.handleSubmit}>
      {Children.map(
        this.props.children,
        child =>
          child.type.displayName === "Field" || child.displayName === "Field"
            ? cloneElement(child, {
                ...child.props,
                onChange: this.handleOnChange,
                value: this.state[child.props.name]
              })
            : child
      )}
    </form>
  )
}
