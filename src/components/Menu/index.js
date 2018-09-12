import React from 'react'

const Menu = props => {
  return (
    <nav className='main-nav'>
      <ul className='main-nav__list'>
        <li className='main-nav__item'>
          <a clasName='main-nav__link' href='#'>Page 1</a>
        </li>
        <li className='main-nav__item'>
          <a clasName='main-nav__link' href='#'>Page 2</a>
        </li>
        <li className='main-nav__item'>
          <a clasName='main-nav__link' href='#'>Page 3</a>
        </li>
        <li className='main-nav__item'>
          <a clasName='main-nav__link' href='#'>Page 4</a>
        </li>
        <li className='main-nav__item'>
          <a clasName='main-nav__link' href='#'>Page 5</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
