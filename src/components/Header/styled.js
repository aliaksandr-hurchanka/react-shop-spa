import styled from 'styled-components'

import { mixinContainer } from '../../theme/mixins.js'

export const HeaderStyled = styled.header`
  ${mixinContainer};
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #4e4e4e;
`
