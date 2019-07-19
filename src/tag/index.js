import styled from "styled-components"
import { colors } from "../constants"
import PropTypes from "prop-types"

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1.333rem;
  line-height: 2rem;
  vertical-align: center;
  padding: 0 1rem;
  border-radius: 1rem;
  background: ${({ bg = colors.gold_500 }) => bg};
  color: ${({ color = colors.ui_900 }) => color};
  svg {
    width: 1.333rem;
    height: 1.333rem;
    margin-right: 0.5rem;
  }
`

Tag.propTypes = {
  /** Background color, defaults to gold_500 */
  bg: PropTypes.string,
  /** Font color, defaults to ui_900 */
  color: PropTypes.string
}

export default Tag
