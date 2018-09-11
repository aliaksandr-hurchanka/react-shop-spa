import styled from 'styled-components'

export const NavListStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 20px 0;
  list-style: none;
  border-bottom: 1px solid #4e4e4e;
`

export const NavLinkStyled = styled.a`
  font-size: 18px;
  color: #4e4e4e;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`
