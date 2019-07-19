import React, { forwardRef } from "react"
import styled from "styled-components"

const StyledSelect = styled.label`
  position: relative;
  display: inline-flex;
`

export default forwardRef(({ className, options = {}, ...props }, ref) => (
  <StyledSelect className={className}>
    <select {...props} ref={ref}>
      {Object.keys(options).map((opt, idx) => (
        <option key={idx} value={options[opt]}>
          {opt}
        </option>
      ))}
    </select>
  </StyledSelect>
))
