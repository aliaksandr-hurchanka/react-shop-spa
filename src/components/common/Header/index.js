import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../Logo'
import Search from '../../Search'
import Menu from '../../Menu'

const Header = props => {
  return (
    <header className='page-header'>
      <div className='page-header__row'>
        <Logo linkUrl='/' imageUrl='https://via.placeholder.com/200x100' />
        <h1 className='page-header__title'>
          {props.title}
        </h1>
        <Search action='#' label='Search' buttonContent='Search' />
      </div>
      <Menu />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
