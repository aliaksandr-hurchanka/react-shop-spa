import React from 'react'
import PropTypes from 'prop-types'

import { LogoStyled } from './styled.js'

const Logo = props => {
  return (
    <LogoStyled href={props.linkUrl}>
      <img src={props.imageUrl} alt='React Shop SPA logo' />
    </LogoStyled>
  )
}

Logo.propTypes = {
  linkUrl: PropTypes.string,
  imageUrl: PropTypes.string.isRequired
}

Logo.defaultProps = {
  linkUrl: '#'
}

export default Logo
