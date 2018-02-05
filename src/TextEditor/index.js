import React, { Component } from "react"
import styled from "styled-components"
import { Editor, EditorState, RichUtils } from "draft-js"

const StyledEditor = styled(Editor)`
  display: block;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 2px;
  background: #f7f7f9;
  font-size: 1em;
  line-height: 1.5;
  resize: none;
  width: 100%;
  outline: none;
  transition: 200ms;
  &:focus {
    border: 2px solid var(--primary);
  }
`

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }
  onChange = editorState => this.setState({ editorState })
  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return "handled"
    }
    return "not-handled"
  }
  _onBold = _ =>
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"))
  render = _ => (
    <div>
      <button onClick={this._onBold}>bold</button>
      <StyledEditor
        editorState={this.state.editorState}
        onChange={this.onChange}
      />
    </div>
  )
}
