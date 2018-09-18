import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Header from './components/common/Header'
import Routes from './Routes'
import Layout from './components/Layout'
// import Catalog from './components/pages/Catalog'
// import Error from './components/pages/Error'
import './styles/imports.scss'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  )
}

export default App
