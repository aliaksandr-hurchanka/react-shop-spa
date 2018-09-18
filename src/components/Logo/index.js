import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Logo = props => {
  return (
    <Link className='logo' to={props.linkUrl}>
      <img src={props.imageUrl} alt='React Shop SPA logo' />
    </Link>
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
