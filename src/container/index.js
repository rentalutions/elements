import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.section`
  max-width: ${({ maxWidth }) => maxWidth}rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`

Container.propTypes = {
  maxWidth: PropTypes.number
}

Container.defaultProps = {
  maxWidth: 84
}

export default Container
