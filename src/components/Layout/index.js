import React from 'react'
import Header from '../common/Header'

const Layout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header title='React Shop SPA' />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
