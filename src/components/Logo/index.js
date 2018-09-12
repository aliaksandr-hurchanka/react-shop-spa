import React from 'react'
import PropTypes from 'prop-types'

const Logo = props => {
  return (
    <a className='logo' href={props.linkUrl}>
      <img src={props.imageUrl} alt='React Shop SPA logo' />
    </a>
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
