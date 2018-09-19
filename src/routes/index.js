import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { paths } from './paths'
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Catalog from '../components/pages/Catalog'
import Error from '../components/pages/Error'

const Routes = () => {
  return (
    <Switch>
      <Route path={paths.HOME} component={Home} exact />
      <Route path={paths.ABOUT} component={About} />
      <Route path={paths.CATALOG} component={Catalog} />
      <Route component={Error} />
    </Switch>
  )
}

export default Routes
