import React from 'react'

import Logo from '../Logo/index.jsx'
import Title from '../Title/index.jsx'
import Search from '../Search/index.jsx'
import Menu from '../Menu/index.jsx'

import { HeaderRow, HeaderStyled } from './styled.js'

const Header = props => {
  return (
    <HeaderStyled>
      <HeaderRow>
        <Logo linkUrl='/' imageUrl='https://via.placeholder.com/200x100' />
        <Title />
        <Search action='#' />
      </HeaderRow>
      <Menu />
    </HeaderStyled>
  )
}

export default Header
