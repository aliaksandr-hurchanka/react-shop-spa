import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/common/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Catalog from './components/pages/Catalog'
import Error from './components/pages/Error'
import './styles/imports.scss'

const App = () => {
  return (
    <Router>
      <div>
        <Header title='React Shop SPA' />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/catalog' component={Catalog} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
