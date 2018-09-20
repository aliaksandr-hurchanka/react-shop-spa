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
  linkUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default Logo
