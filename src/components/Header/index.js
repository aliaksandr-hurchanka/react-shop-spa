import React from 'react'
import Logo from '../Logo'
import Title from '../Title'
import Search from '../Search'
import Menu from '../Menu'
import './style.scss'

const Header = props => {
  return (
    <header className='page-header'>
      <div className='page-header__row  clearfix'>
        <Logo linkUrl='/' imageUrl='https://via.placeholder.com/200x100' />
        <Title content='React Shop SPA' />
        <Search action='#' label='Search' buttonContent='d' />
      </div>
      <Menu />
    </header>
  )
}

export default Header
