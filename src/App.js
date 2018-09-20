import React from 'react'
import Routes from './Routes'
import Header from './components/common/Header'
import './styles/imports.scss'

const App = () => {
  return (
    <div>
      <Header title='React Shop SPA' />
      <Routes />
    </div>
  )
}

export default App
