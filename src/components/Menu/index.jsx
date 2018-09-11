import React from 'react'

import { NavListStyled, NavLinkStyled } from './styled.js'

const Menu = props => {
  return (
    <nav>
      <NavListStyled>
        <li>
          <NavLinkStyled href='#'>Page 1</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled href='#'>Page 2</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled href='#'>Page 3</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled href='#'>Page 4</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled href='#'>Page 5</NavLinkStyled>
        </li>
      </NavListStyled>
    </nav>
  )
}

export default Menu
