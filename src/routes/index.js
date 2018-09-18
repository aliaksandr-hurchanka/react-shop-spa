import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Catalog from '../components/pages/Catalog'
import Error from '../components/pages/Error'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} />
      <Route path='/catalog' component={Catalog} />
      <Route component={Error} />
    </Switch>
  )
}

export default Routes
