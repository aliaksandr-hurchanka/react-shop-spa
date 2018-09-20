import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => {
  return (
    <nav className='main-nav'>
      <ul className='main-nav__list'>
        <li className='main-nav__item'>
          <Link to='/' className='main-nav__link'>Home</Link>
        </li>
        <li className='main-nav__item'>
          <Link to='/about' className='main-nav__link'>About</Link>
        </li>
        <li className='main-nav__item'>
          <Link to='/catalog' className='main-nav__link'>Catalog</Link>
        </li>
        <li className='main-nav__item'>
          <a className='main-nav__link' href='#'>Page 4</a>
        </li>
        <li className='main-nav__item'>
          <a className='main-nav__link' href='#'>Page 5</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
